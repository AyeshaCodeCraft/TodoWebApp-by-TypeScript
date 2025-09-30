

import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import DashboardNavbar from "./components/DashboardNavbar";
import TaskDetailsModal from "./TaskDetails/TaskDetailsModal";
import AddTaskModal from "./components/AddTaskModal";

import type { Task, User, Status } from "./types";
import { normalizeTask } from "./types";

const Dashboard: React.FC = () => {
  const location = useLocation();
  const storedUser: User = JSON.parse(localStorage.getItem("user") || "{}");

  const [tasks, setTasks] = useState<Task[]>(
    storedUser.todos?.map(normalizeTask) || []
  );
  const [inlineSelectedTask, setInlineSelectedTask] = useState<Task | null>(
    null
  );
  const [searchSelectedTask, setSearchSelectedTask] = useState<Task | null>(
    null
  );
  const [isEditing, setIsEditing] = useState(false);

  const saveTasks = async (newTasks: Task[]) => {
    setTasks(newTasks);
    const updatedUser = { ...storedUser, todos: newTasks };
    localStorage.setItem("user", JSON.stringify(updatedUser));

    try {
      await fetch(`http://localhost:5000/users/${storedUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todos: newTasks }),
      });
    } catch (err) {
      console.error("Failed to update JSON server", err);
    }
  };

  const handleSaveTask = (task: Task) => {
    if (isEditing) {
      saveTasks(tasks.map((t) => (t.id === task.id ? task : t)));
      setIsEditing(false);
    } else {
      saveTasks([...tasks, task]);
    }
    setInlineSelectedTask(null);
    setSearchSelectedTask(null);
  };

  const handleDelete = (id: string | number) => {
    saveTasks(tasks.filter((t) => t.id !== id));
    setInlineSelectedTask(null);
    setSearchSelectedTask(null);
  };

  const handleUpdateStatus = (id: string | number, newStatus: Status) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, status: newStatus } : t
    );
    saveTasks(updated);

    setInlineSelectedTask((prev) =>
      prev && prev.id === id ? { ...prev, status: newStatus } : prev
    );
    setSearchSelectedTask((prev) =>
      prev && prev.id === id ? { ...prev, status: newStatus } : prev
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNavbar onTaskSelect={setSearchSelectedTask} />
      <div className="flex flex-1 flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 mt-14 lg:mt-0 bg-[#F5F8FF] p-3 lg:p-0">
          <Outlet
            key={location.pathname} // 🔑 force remount on route change
            context={{
              tasks,
              handleSaveTask,
              handleDelete,
              handleUpdateStatus,
              inlineSelectedTask,
              setInlineSelectedTask,
              isEditing,
              setIsEditing,
            }}
          />
        </main>
      </div>

      {searchSelectedTask && (
        <TaskDetailsModal
          task={searchSelectedTask}
          onClose={() => setSearchSelectedTask(null)}
          onDelete={handleDelete}
          onUpdateStatus={handleUpdateStatus}
          onEdit={(task) => {
            setInlineSelectedTask(task);
            setIsEditing(true);
          }}
        />
      )}

      {isEditing && (
        <AddTaskModal
          onClose={() => {
            setInlineSelectedTask(null);
            setIsEditing(false);
          }}
          onSave={handleSaveTask}
          taskToEdit={inlineSelectedTask}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;



