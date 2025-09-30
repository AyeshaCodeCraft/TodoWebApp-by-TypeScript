

// src/pages/Dashboard/DashboardHome.tsx
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import AddTaskModal from "../components/AddTaskModal";
import TaskCard from "../components/TaskCard";
import TaskStatus from "../components/TaskStatus";
import TaskDetails from "../TaskDetails/TaskDetails";

import type { Task, User } from "../types";
import { normalizeTask } from "../types";

import user1 from "/assets/Person1.png";
import user2 from "/assets/Person2.png";
import user3 from "/assets/Person3.png";
import user4 from "/assets/Person4.png";
import user5 from "/assets/Person5.png";
import handwaveIcon from "/assets/hand wave.png";
import inviteIcon from "/assets/invite.png";
import pendingIcon from "/assets/Pending.png";
import completedIcon from "/assets/Task Complete.png";
import plusIcon from "/assets/plusIcon.png";

interface OutletContext {
  inlineSelectedTask: Task | null;
  setInlineSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
}

interface DashboardHomeProps {
  setSidebarActive?: (active: string | null) => void;
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ setSidebarActive }) => {
  const storedUser: User = JSON.parse(localStorage.getItem("user") || "{}");
  const name = storedUser.firstName || "User";

  const { inlineSelectedTask, setInlineSelectedTask } =
    useOutletContext<OutletContext>();

  const [tasks, setTasks] = useState<Task[]>(
    storedUser.todos ? storedUser.todos.map(normalizeTask) : []
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Save tasks locally & backend
  const saveTasks = async (newTasks: Task[]) => {
    const normalized = newTasks.map(normalizeTask);
    const updatedUser: User = { ...storedUser, todos: normalized };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setTasks(normalized);

    try {
      await fetch(`http://localhost:5000/users/${storedUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todos: normalized }),
      });
    } catch (err) {
      console.error("DB update failed:", err);
    }
  };

  const handleSaveTask = (task: Task) => {
    if (isEditing) {
      const updated = tasks.map((t) => (t.id === task.id ? task : t));
      saveTasks(updated);
      setIsEditing(false);
    } else {
      saveTasks([...tasks, task]);
    }
    setShowModal(false);
  };

  const handleDelete = (id: string | number) => {
    const updated = tasks.filter((t) => t.id !== id);
    saveTasks(updated);
    setSelectedTask(null);
    setInlineSelectedTask(null);
  };

  const handleUpdateStatus = (id: string | number, newStatus: Task["status"]) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, status: newStatus } : t
    );
    saveTasks(updated);

    setSelectedTask((prev: Task | null) =>
      prev && prev.id === id ? { ...prev, status: newStatus } : prev
    );

    setInlineSelectedTask((prev: Task | null) =>
      prev && prev.id === id ? { ...prev, status: newStatus } : prev
    );
  };

  // Percentages
  const total = tasks.length || 1;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const inProgress = tasks.filter((t) => t.status === "In Progress").length;
  const notStarted = tasks.filter((t) => t.status === "Not Started").length;

  const completedPct = Math.round((completed / total) * 100);
  const inProgressPct = Math.round((inProgress / total) * 100);
  const notStartedPct = Math.round((notStarted / total) * 100);

  useEffect(() => {
    if (setSidebarActive) {
      setSidebarActive(selectedTask || inlineSelectedTask ? null : "dashboard");
    }
  }, [selectedTask, inlineSelectedTask, setSidebarActive]);

  return (
    <div
      className={`p-4 sm:p-6 lg:p-8 ${selectedTask || inlineSelectedTask ? "details-mode" : "dashboard-mode"
        }`}
    >
      {!selectedTask && !inlineSelectedTask ? (
        <>
          {/* Topbar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
              Welcome back, {name}
              <img src={handwaveIcon} alt="wave" className="w-8 h-8" />
            </h2>

            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {[user1, user2, user3, user4, user5].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`User ${i + 1}`}
                    className="w-9 h-9  border-white shadow"
                  />
                ))}
              </div>
              <button className="flex items-center gap-2 border border-[#FF6767] text-[#FF6767] px-4 py-2 rounded-lg hover:bg-[#FF6767] hover:text-white transition font-medium text-sm">
                <img src={inviteIcon} alt="Invite" className="w-4 h-4" />
                Invite
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-6 ">
            {/* Left Column */}
            <div className=" rounded-2xl shadow-sm p-5 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <img src={pendingIcon} alt="pending" className="w-5 h-5" />
                  <span className="text-[#FF6767] font-semibold">To-Do</span>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1 text-gray-500 hover:text-[#FF6767] transition text-sm"
                >
                  <img src={plusIcon} alt="add" className="w-4 h-4" />
                  Add task
                </button>
              </div>

              <div className="space-y-3 overflow-y-auto max-h-[450px] pr-2 scrollbar-thin scrollbar-thumb-gray-300">
                {tasks
                  .filter((task) => task.status !== "Completed")
                  .map((task) => (
                    <div
                      key={task.id}
                      onClick={() => setSelectedTask(task)}
                      className="cursor-pointer"
                    >
                      <TaskCard task={task} />
                    </div>
                  ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <TaskStatus
                completedPct={completedPct}
                inProgressPct={inProgressPct}
                notStartedPct={notStartedPct}
              />

              <div className="rounded-2xl shadow-sm p-5 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <img src={completedIcon} alt="completed" className="w-5 h-5" />
                  <span className="text-[#F24E1E] font-semibold">
                    Completed Tasks
                  </span>
                </div>
                <div className="space-y-3 overflow-y-auto max-h-[300px] pr-2 scrollbar-thin scrollbar-thumb-gray-300">
                  {tasks
                    .filter((task) => task.status === "Completed")
                    .map((task) => (
                      <div
                        key={task.id}
                        onClick={() => setSelectedTask(task)}
                        className="cursor-pointer"
                      >
                        <TaskCard task={task} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <TaskDetails
          task={selectedTask || inlineSelectedTask}
          onClose={() => {
            setSelectedTask(null);
            setInlineSelectedTask(null);
          }}
          onDelete={handleDelete}
          onUpdateStatus={handleUpdateStatus}
          onEdit={(task) => {
            setIsEditing(true);
            setSelectedTask(task);
            setShowModal(true);
          }}
        />
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <AddTaskModal
          onClose={() => {
            setShowModal(false);
            setIsEditing(false);
          }}
          onSave={handleSaveTask}
          taskToEdit={isEditing ? selectedTask : null}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};

export default DashboardHome;
