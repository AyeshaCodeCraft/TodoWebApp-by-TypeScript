

// // src/pages/Dashboard/DashboardHome.tsx
// import { useOutletContext } from "react-router-dom";
// import { useState, useEffect } from "react";
// import AddTaskModal from "../components/AddTaskModal";
// import TaskCard from "../components/TaskCard";
// import TaskStatus from "../components/TaskStatus";
// import TaskDetails from "../TaskDetails/TaskDetails";

// import user1 from "../../../assets/Person1.png";
// import user2 from "../../../assets/Person2.png";
// import user3 from "../../../assets/Person3.png";
// import user4 from "../../../assets/Person4.png";
// import user5 from "../../../assets/Person5.png";
// import handwaveIcon from "../../../assets/hand wave.png";
// import inviteIcon from "../../../assets/invite.png";
// import pendingIcon from "../../../assets/Pending.png";
// import completedIcon from "../../../assets/Task Complete.png";
// import plusIcon from "../../../assets/plusIcon.png";

// interface Task {
//   id: string | number;
//   title: string;
//   description?: string;
//   status?: "Not Started" | "In Progress" | "Completed";
//   [key: string]: any;
// }

// interface OutletContext {
//   inlineSelectedTask: Task | null;
//   setInlineSelectedTask: (task: Task | null) => void;
// }

// interface DashboardHomeProps {
//   setSidebarActive?: (active: string | null) => void;
// }

// const DashboardHome: React.FC<DashboardHomeProps> = ({ setSidebarActive }) => {
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//   const name = storedUser.firstName || "User";

//   const { inlineSelectedTask, setInlineSelectedTask } =
//     useOutletContext<OutletContext>();

//   const [tasks, setTasks] = useState<Task[]>(storedUser.todos || []);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedTask, setSelectedTask] = useState<Task | null>(null);
//   const [isEditing, setIsEditing] = useState(false);

//   // Save tasks locally & to backend
//   const saveTasks = async (newTasks: Task[]) => {
//     const updatedUser = { ...storedUser, todos: newTasks };
//     localStorage.setItem("user", JSON.stringify(updatedUser));
//     setTasks(newTasks);

//     try {
//       await fetch(`http://localhost:5000/users/${storedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ todos: newTasks }),
//       });
//     } catch (err) {
//       console.error("DB update failed:", err);
//     }
//   };

//   const handleSaveTask = (task: Task) => {
//     if (isEditing) {
//       const updated = tasks.map((t) => (t.id === task.id ? task : t));
//       saveTasks(updated);
//       setIsEditing(false);
//     } else {
//       saveTasks([...tasks, task]);
//     }
//     setShowModal(false);
//   };

//   const handleDelete = (id: string | number) => {
//     const updated = tasks.filter((t) => t.id !== id);
//     saveTasks(updated);
//     setSelectedTask(null);
//     setInlineSelectedTask(null);
//   };

//   const handleUpdateStatus = (id: string | number, newStatus: Task["status"]) => {
//     const updated = tasks.map((t) =>
//       t.id === id ? { ...t, status: newStatus } : t
//     );
//     saveTasks(updated);
//     setSelectedTask((prev) =>
//       prev && prev.id === id ? { ...prev, status: newStatus } : prev
//     );
//     setInlineSelectedTask((prev) =>
//       prev && prev.id === id ? { ...prev, status: newStatus } : prev
//     );
//   };

//   // Percentages
//   const total = tasks.length || 1;
//   const completed = tasks.filter((t) => t.status === "Completed").length;
//   const inProgress = tasks.filter((t) => t.status === "In Progress").length;
//   const notStarted = tasks.filter(
//     (t) => !t.status || t.status === "Not Started"
//   ).length;

//   const completedPct = Math.round((completed / total) * 100);
//   const inProgressPct = Math.round((inProgress / total) * 100);
//   const notStartedPct = Math.round((notStarted / total) * 100);

//   // Clear sidebar highlight when viewing inline details
//   useEffect(() => {
//     if (setSidebarActive) {
//       setSidebarActive(selectedTask || inlineSelectedTask ? null : "dashboard");
//     }
//   }, [selectedTask, inlineSelectedTask, setSidebarActive]);

//   return (
//     <div
//       className={`dashboard-container ${
//         selectedTask || inlineSelectedTask ? "details-mode" : "dashboard-mode"
//       }`}
//     >
//       {!selectedTask && !inlineSelectedTask ? (
//         <>
//           {/* Topbar */}
//           <div className="dashboard-topbar">
//             <div className="welcome-text">
//               <h2 className="flex items-center gap-2">
//                 Welcome back, {name}
//                 <img src={handwaveIcon} alt="wave" className="w-10 h-10" />
//               </h2>
//             </div>

//             <div className="topbar-right flex items-center gap-4">
//               <div className="avatars flex gap-1">
//                 {[user1, user2, user3, user4, user5].map((img, i) => (
//                   <img key={i} src={img} alt={`User ${i + 1}`} className="w-9 h-9 rounded" />
//                 ))}
//               </div>
//               <button className="invite-btn flex items-center gap-1 border-2 border-[#FF6767] text-[#FF6767] px-4 py-2 rounded hover:bg-[#FF6767] hover:text-white transition">
//                 <img src={inviteIcon} alt="Invite" className="w-4 h-3" />
//                 Invite
//               </button>
//             </div>
//           </div>

//           {/* Main Dashboard */}
//           <div className="dashboard-main-content flex gap-4 mt-4">
//             {/* Left Column */}
//             <div className="left-column w-[466px]">
//               <div className="todo-card p-4 rounded shadow">
//                 <div className="todo-header flex justify-between mb-4">
//                   <div className="header-left flex items-center gap-2">
//                     <img src={pendingIcon} alt="pending" className="w-5 h-5" />
//                     <span className="text-[#FF6767] font-medium text-sm">To-Do</span>
//                   </div>
//                   <div
//                     className="header-right flex items-center gap-2 cursor-pointer"
//                     onClick={() => setShowModal(true)}
//                   >
//                     <img src={plusIcon} alt="add" className="w-4 h-4" />
//                     <span className="text-gray-400 text-xs">Add task</span>
//                   </div>
//                 </div>
//                 <div className="task-list max-h-[400px] overflow-y-auto">
//                   {tasks
//                     .filter(
//                       (task) =>
//                         !task.status ||
//                         task.status === "Not Started" ||
//                         task.status === "In Progress"
//                     )
//                     .map((task) => (
//                       <div
//                         key={task.id}
//                         onClick={() => setSelectedTask(task)}
//                         className="task-wrapper mb-2 cursor-pointer"
//                       >
//                         <TaskCard task={task} />
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="right-column flex flex-col gap-6 w-[423px]">
//               <TaskStatus
//                 completedPct={completedPct}
//                 inProgressPct={inProgressPct}
//                 notStartedPct={notStartedPct}
//               />

//               <div className="completed-card p-4 rounded shadow h-[300px] flex flex-col">
//                 <div className="completed-header flex items-center gap-2 mb-2">
//                   <img src={completedIcon} alt="completed" className="w-5 h-5" />
//                   <span className="text-[#F24E1E] font-medium text-sm">
//                     Completed Task
//                   </span>
//                 </div>
//                 <div className="task-list overflow-y-auto max-h-[240px]">
//                   {tasks
//                     .filter((task) => task.status === "Completed")
//                     .map((task) => (
//                       <div
//                         key={task.id}
//                         onClick={() => setSelectedTask(task)}
//                         className="task-wrapper mb-2 cursor-pointer"
//                       >
//                         <TaskCard task={task} />
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         // Inline TaskDetails
//         <TaskDetails
//           task={selectedTask || inlineSelectedTask}
//           onClose={() => {
//             setSelectedTask(null);
//             setInlineSelectedTask(null);
//           }}
//           onDelete={handleDelete}
//           onUpdateStatus={handleUpdateStatus}
//           onEdit={(task) => {
//             setIsEditing(true);
//             setSelectedTask(task);
//             setShowModal(true);
//           }}
//         />
//       )}

//       {/* Add/Edit Modal */}
//       {showModal && (
//         <AddTaskModal
//           onClose={() => {
//             setShowModal(false);
//             setIsEditing(false);
//           }}
//           onSave={handleSaveTask}
//           taskToEdit={isEditing ? selectedTask : null}
//           isEditing={isEditing}
//         />
//       )}
//     </div>
//   );
// };

// export default DashboardHome;









// // src/pages/Dashboard/DashboardHome.tsx
// import { useOutletContext } from "react-router-dom";
// import { useState, useEffect } from "react";
// import AddTaskModal from "../components/AddTaskModal";
// import TaskCard from "../components/TaskCard";
// import TaskStatus from "../components/TaskStatus";
// import TaskDetails from "../TaskDetails/TaskDetails";

// import type { Task } from "../types"; 
// import { normalizeTask } from "../types"; 


// import user1 from "../../../assets/Person1.png";
// import user2 from "../../../assets/Person2.png";
// import user3 from "../../../assets/Person3.png";
// import user4 from "../../../assets/Person4.png";
// import user5 from "../../../assets/Person5.png";
// import handwaveIcon from "../../../assets/hand wave.png";
// import inviteIcon from "../../../assets/invite.png";
// import pendingIcon from "../../../assets/Pending.png";
// import completedIcon from "../../../assets/Task Complete.png";
// import plusIcon from "../../../assets/plusIcon.png";

// interface OutletContext {
//   inlineSelectedTask: Task | null;
//   setInlineSelectedTask: (task: Task | null) => void;
// }

// interface DashboardHomeProps {
//   setSidebarActive?: (active: string | null) => void;
// }

// const DashboardHome: React.FC<DashboardHomeProps> = ({ setSidebarActive }) => {
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//   const name = storedUser.firstName || "User";

//   const { inlineSelectedTask, setInlineSelectedTask } =
//     useOutletContext<OutletContext>();

//   // Load & normalize tasks
//   const [tasks, setTasks] = useState<Task[]>(
//     (storedUser.todos || []).map(normalizeTask)
//   );
//   const [showModal, setShowModal] = useState(false);
//   const [selectedTask, setSelectedTask] = useState<Task | null>(null);
//   const [isEditing, setIsEditing] = useState(false);

//   // Save tasks locally & backend
//   const saveTasks = async (newTasks: Task[]) => {
//     const updatedUser = { ...storedUser, todos: newTasks };
//     localStorage.setItem("user", JSON.stringify(updatedUser));
//     setTasks(newTasks);

//     try {
//       await fetch(`http://localhost:5000/users/${storedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ todos: newTasks }),
//       });
//     } catch (err) {
//       console.error("DB update failed:", err);
//     }
//   };

//   const handleSaveTask = (task: Task) => {
//     if (isEditing) {
//       const updated = tasks.map((t) => (t.id === task.id ? task : t));
//       saveTasks(updated);
//       setIsEditing(false);
//     } else {
//       saveTasks([...tasks, task]);
//     }
//     setShowModal(false);
//   };

//   const handleDelete = (id: string | number) => {
//     const updated = tasks.filter((t) => t.id !== id);
//     saveTasks(updated);
//     setSelectedTask(null);
//     setInlineSelectedTask(null);
//   };

//   const handleUpdateStatus = (id: string | number, newStatus: Task["status"]) => {
//     const updated = tasks.map((t) =>
//       t.id === id ? { ...t, status: newStatus } : t
//     );
//     saveTasks(updated);

//     setSelectedTask((prev: Task | null) =>
//       prev && prev.id === id ? { ...prev, status: newStatus } : prev
//     );

//     setInlineSelectedTask((prev: Task | null) =>
//       prev && prev.id === id ? { ...prev, status: newStatus } : prev
//     );
//   };

//   // Percentages
//   const total = tasks.length || 1;
//   const completed = tasks.filter((t) => t.status === "Completed").length;
//   const inProgress = tasks.filter((t) => t.status === "In Progress").length;
//   const notStarted = tasks.filter(
//     (t) => !t.status || t.status === "Not Started"
//   ).length;

//   const completedPct = Math.round((completed / total) * 100);
//   const inProgressPct = Math.round((inProgress / total) * 100);
//   const notStartedPct = Math.round((notStarted / total) * 100);

//   // Clear sidebar highlight when viewing inline details
//   useEffect(() => {
//     if (setSidebarActive) {
//       setSidebarActive(selectedTask || inlineSelectedTask ? null : "dashboard");
//     }
//   }, [selectedTask, inlineSelectedTask, setSidebarActive]);

//   return (
//     <div
//       className={`dashboard-container ${
//         selectedTask || inlineSelectedTask ? "details-mode" : "dashboard-mode"
//       }`}
//     >
//       {!selectedTask && !inlineSelectedTask ? (
//         <>
//           {/* Topbar */}
//           <div className="dashboard-topbar flex justify-between items-center p-3 m-2 gap-20">
//             <div className="welcome-text flex items-center gap-2">
//               <h2 className="text-2xl font-medium">
//                 Welcome back, {name}
//               </h2>
//               <img src={handwaveIcon} alt="wave" className="w-10 h-10" />
//             </div>

//             <div className="topbar-right flex items-center gap-4">
//               <div className="avatars flex gap-1">
//                 {[user1, user2, user3, user4, user5].map((img, i) => (
//                   <img key={i} src={img} alt={`User ${i + 1}`} className="w-9 h-9 rounded" />
//                 ))}
//               </div>
//               <button className="invite-btn flex items-center gap-1 border-2 border-[#FF6767] text-[#FF6767] px-4 py-2 rounded hover:bg-[#FF6767] hover:text-white transition">
//                 <img src={inviteIcon} alt="Invite" className="w-4 h-3" />
//                 Invite
//               </button>
//             </div>
//           </div>

//           {/* Main Dashboard */}
//           <div className="dashboard-main-content flex gap-4 mt-4">
//             {/* Left Column */}
//             <div className="left-column w-[466px]">
//               <div className="todo-card p-4 rounded shadow">
//                 <div className="todo-header flex justify-between mb-4">
//                   <div className="header-left flex items-center gap-2">
//                     <img src={pendingIcon} alt="pending" className="w-5 h-5" />
//                     <span className="text-[#FF6767] font-medium text-sm">To-Do</span>
//                   </div>
//                   <div
//                     className="header-right flex items-center gap-2 cursor-pointer"
//                     onClick={() => setShowModal(true)}
//                   >
//                     <img src={plusIcon} alt="add" className="w-4 h-4" />
//                     <span className="text-gray-400 text-xs">Add task</span>
//                   </div>
//                 </div>
//                 <div className="task-list max-h-[400px] overflow-y-auto">
//                   {tasks
//                     .filter(
//                       (task) =>
//                         !task.status ||
//                         task.status === "Not Started" ||
//                         task.status === "In Progress"
//                     )
//                     .map((task) => (
//                       <div
//                         key={task.id}
//                         onClick={() => setSelectedTask(task)}
//                         className="task-wrapper mb-2 cursor-pointer"
//                       >
//                         <TaskCard task={task} />
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="right-column flex flex-col gap-6 w-[423px]">
//               <TaskStatus
//                 completedPct={completedPct}
//                 inProgressPct={inProgressPct}
//                 notStartedPct={notStartedPct}
//               />

//               <div className="completed-card p-4 rounded shadow h-[300px] flex flex-col">
//                 <div className="completed-header flex items-center gap-2 mb-2">
//                   <img src={completedIcon} alt="completed" className="w-5 h-5" />
//                   <span className="text-[#F24E1E] font-medium text-sm">
//                     Completed Task
//                   </span>
//                 </div>
//                 <div className="task-list overflow-y-auto max-h-[240px]">
//                   {tasks
//                     .filter((task) => task.status === "Completed")
//                     .map((task) => (
//                       <div
//                         key={task.id}
//                         onClick={() => setSelectedTask(task)}
//                         className="task-wrapper mb-2 cursor-pointer"
//                       >
//                         <TaskCard task={task} />
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         // Inline TaskDetails
//         <TaskDetails
//           task={selectedTask || inlineSelectedTask}
//           onClose={() => {
//             setSelectedTask(null);
//             setInlineSelectedTask(null);
//           }}
//           onDelete={handleDelete}
//           onUpdateStatus={handleUpdateStatus}
//           onEdit={(task) => {
//             setIsEditing(true);
//             setSelectedTask(task);
//             setShowModal(true);
//           }}
//         />
//       )}

//       {/* Add/Edit Modal */}
//       {showModal && (
//         <AddTaskModal
//           onClose={() => {
//             setShowModal(false);
//             setIsEditing(false);
//           }}
//           onSave={handleSaveTask}
//           taskToEdit={isEditing ? selectedTask : null}
//           isEditing={isEditing}
//         />
//       )}
//     </div>
//   );
// };

// export default DashboardHome;
















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

  // Save task (add/edit)
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

  // Delete
  const handleDelete = (id: string | number) => {
    const updated = tasks.filter((t) => t.id !== id);
    saveTasks(updated);
    setSelectedTask(null);
    setInlineSelectedTask(null);
  };

  // Update status
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

  // Clear sidebar highlight when viewing inline details
  useEffect(() => {
    if (setSidebarActive) {
      setSidebarActive(selectedTask || inlineSelectedTask ? null : "dashboard");
    }
  }, [selectedTask, inlineSelectedTask, setSidebarActive]);

  return (
    <div
      className={`dashboard-container ${
        selectedTask || inlineSelectedTask ? "details-mode" : "dashboard-mode"
      }`}
    >
      {!selectedTask && !inlineSelectedTask ? (
        <>
          {/* Topbar */}
          <div className="dashboard-topbar flex justify-between items-center p-4 m-2 gap-[190px]">
            <div className="welcome-text">
              <h2 className="flex items-center gap-2 text-2xl font-medium">
                Welcome back, {name}
                <img src={handwaveIcon} alt="wave" className="w-10 h-10" />
              </h2>
            </div>

            <div className="topbar-right flex items-center gap-4">
              <div className="avatars flex gap-1">
                {[user1, user2, user3, user4, user5].map((img, i) => (
                  <img key={i} src={img} alt={`User ${i + 1}`} className="w-9 h-9 rounded" />
                ))}
              </div>
              <button className="invite-btn flex items-center gap-1 border-2 border-[#FF6767] text-[#FF6767] px-4 py-2 rounded hover:bg-[#FF6767] hover:text-white transition">
                <img src={inviteIcon} alt="Invite" className="w-4 h-3" />
                Invite
              </button>
            </div>
          </div>

          {/* Main Dashboard */}
          <div className="dashboard-main-content flex gap-4 mt-4">
            {/* Left Column */}
            <div className="left-column w-[466px]">
              <div className="todo-card p-4 rounded shadow">
                <div className="todo-header flex justify-between mb-4">
                  <div className="header-left flex items-center gap-2">
                    <img src={pendingIcon} alt="pending" className="w-5 h-5" />
                    <span className="text-[#FF6767] font-medium text-sm">To-Do</span>
                  </div>
                  <div
                    className="header-right flex items-center gap-2 cursor-pointer"
                    onClick={() => setShowModal(true)}
                  >
                    <img src={plusIcon} alt="add" className="w-4 h-4" />
                    <span className="text-gray-400 text-xs">Add task</span>
                  </div>
                </div>
                <div className="task-list max-h-[400px] overflow-y-auto">
                  {tasks
                    .filter((task) => task.status !== "Completed")
                    .map((task) => (
                      <div
                        key={task.id}
                        onClick={() => setSelectedTask(task)}
                        className="task-wrapper mb-2 cursor-pointer"
                      >
                        <TaskCard task={task} />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column flex flex-col gap-6 w-[423px]">
              <TaskStatus
                completedPct={completedPct}
                inProgressPct={inProgressPct}
                notStartedPct={notStartedPct}
              />

              <div className="completed-card p-4 rounded shadow h-[300px] flex flex-col">
                <div className="completed-header flex items-center gap-2 mb-2">
                  <img src={completedIcon} alt="completed" className="w-5 h-5" />
                  <span className="text-[#F24E1E] font-medium text-sm">Completed Task</span>
                </div>
                <div className="task-list overflow-y-auto max-h-[240px]">
                  {tasks
                    .filter((task) => task.status === "Completed")
                    .map((task) => (
                      <div
                        key={task.id}
                        onClick={() => setSelectedTask(task)}
                        className="task-wrapper mb-2 cursor-pointer"
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
