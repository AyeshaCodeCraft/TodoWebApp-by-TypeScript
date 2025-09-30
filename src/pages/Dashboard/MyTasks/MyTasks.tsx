
// // src/pages/Dashboard/MyTasks/MyTasks.tsx
// import { useState, useEffect } from "react";
// import TaskCard from "../components/TaskCard";
// import AddTaskModal from "../components/AddTaskModal";

// import deleteIcon from "/assets/delete.png";
// import editIcon from "/assets/edit.png";
// import type { Task } from "../types";

// function MyTasks() {
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [selectedTask, setSelectedTask] = useState<Task | null>(null);
//   const [showModal, setShowModal] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     if (storedUser.todos) {
//       setTasks(storedUser.todos);
//     }
//   }, []);

//   // Save tasks
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

//   // Delete Task
//   const handleDelete = (id: string | number) => {
//     const newTasks = tasks.filter((t) => t.id !== id);
//     saveTasks(newTasks);
//     setSelectedTask(null);
//   };

//   // Save Task
//   const handleSaveTask = (task: Task) => {
//     if (isEditing) {
//       const updated = tasks.map((t) => (t.id === task.id ? { ...task } : t));
//       saveTasks(updated);
//       setIsEditing(false);
//     } else {
//       saveTasks([...tasks, task]);
//     }
//     setShowModal(false);
//   };

//   return (
//     <div className="flex gap-6 w-full px-8">
//       {/* Left column (Task list) */}
//       <div className="w-[466px] border border-[#A1A3ABA1] p-4 rounded-xl flex flex-col mb-8 cursor-pointer">
//         <h3 className="mb-5 font-montserrat font-semibold text-[16px] leading-none">
//           My Tasks
//           <span className="block h-[2px] w-10 bg-[#F24E1E] mt-1"></span>
//         </h3>

//         <div className="flex-1 max-h-[550px] overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
//           {tasks.map((task) => (
//             <div
//               key={task.id}
//               onClick={() => setSelectedTask(task)}
//               className={`rounded-lg ${
//                 selectedTask?.id === task.id ? "bg-gray-200" : ""
//               }`}
//             >
//               <TaskCard task={task} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right column (Details) */}
//       <div className="flex-1 p-5 border border-[#A1A3ABA1] rounded-xl mb-8 relative">
//         {selectedTask ? (
//           <div className="flex flex-col gap-5 h-full">
//             {/* Top row: image + info */}
//             <div className="flex gap-5">
//               {/* Image left */}
//               <div className="w-[160px] h-[120px] rounded-lg overflow-hidden bg-gray-100 flex justify-center items-center">
//                 {selectedTask.image ? (
//                   <img
//                     src={selectedTask.image}
//                     alt="Task"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 rounded-lg" />
//                 )}
//               </div>

//               {/* Info right */}
//               <div className="flex flex-col gap-3 font-inter flex-1">
//                 <h3 className="text-[16px] font-semibold text-black">
//                   {selectedTask.title}
//                 </h3>
//                 <span className="text-sm font-medium">
//                   Priority:{" "}
//                   <span
//                     className={`${
//                       selectedTask.priority === "Low"
//                         ? "text-green-600"
//                         : selectedTask.priority === "Moderate"
//                         ? "text-yellow-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {selectedTask.priority}
//                   </span>
//                 </span>
//                 <span className="text-sm font-medium">
//                   Status:{" "}
//                   <span
//                     className={`${
//                       selectedTask.status === "Not Started"
//                         ? "text-gray-500"
//                         : selectedTask.status === "In Progress"
//                         ? "text-blue-600"
//                         : "text-green-600"
//                     }`}
//                   >
//                     {selectedTask.status}
//                   </span>
//                 </span>
//                 <span className="text-xs text-[#A1A3AB]">
//                   Created on: {selectedTask.date || "—"}
//                 </span>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="text-sm text-[#747474] font-inter leading-relaxed font-normal flex-1">
//               <strong className="block mb-1">Task Description:</strong>
//               <p>{selectedTask.description}</p>
//             </div>

//             {/* Actions fixed bottom-right */}
//             <div className="absolute bottom-5 right-5 flex gap-3">
//               <img
//                 src={deleteIcon}
//                 alt="Delete"
//                 title="Delete"
//                 className="w-9 h-9 cursor-pointer hover:scale-110 transition-transform"
//                 onClick={() => handleDelete(selectedTask.id)}
//               />
//               <img
//                 src={editIcon}
//                 alt="Edit"
//                 title="Edit"
//                 className="w-9 h-9 cursor-pointer hover:scale-110 transition-transform"
//                 onClick={() => {
//                   setIsEditing(true);
//                   setShowModal(true);
//                 }}
//               />
//             </div>
//           </div>
//         ) : (
//           <div className="text-gray-400 text-center">
//             Select a task to see details
//           </div>
//         )}
//       </div>

//       {/* Modal (Edit/Add) */}
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
// }

// export default MyTasks;






// src/pages/Dashboard/MyTasks/MyTasks.tsx
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import TaskCard from "../components/TaskCard";
import AddTaskModal from "../components/AddTaskModal";

import deleteIcon from "/assets/delete.png";
import editIcon from "/assets/edit.png";

import type { Task, Status } from "../types";

interface DashboardContext {
  tasks: Task[];
  handleSaveTask: (task: Task) => void;
  handleDelete: (id: string | number) => void;
  handleUpdateStatus: (id: string | number, newStatus: Status) => void;
}

function MyTasks() {
  const { tasks, handleSaveTask, handleDelete } =
    useOutletContext<DashboardContext>();

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex gap-6 w-full px-8">
      {/* Left column (Task list) */}
      <div className="w-[466px] border border-[#A1A3ABA1] p-4 rounded-xl flex flex-col mb-8 cursor-pointer">
        <h3 className="mb-5 font-montserrat font-semibold text-[16px] leading-none">
          My Tasks
          <span className="block h-[2px] w-10 bg-[#F24E1E] mt-1"></span>
        </h3>

        <div className="flex-1 max-h-[550px] overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => setSelectedTask(task)}
              className={`rounded-lg ${
                selectedTask?.id === task.id ? "bg-gray-200" : ""
              }`}
            >
              <TaskCard task={task} />
            </div>
          ))}
        </div>
      </div>

      {/* Right column (Details) */}
      <div className="flex-1 p-5 border border-[#A1A3ABA1] rounded-xl mb-8 relative">
        {selectedTask ? (
          <div className="flex flex-col gap-5 h-full">
            {/* Top row: image + info */}
            <div className="flex gap-5">
              {/* Image left */}
              <div className="w-[160px] h-[120px] rounded-lg overflow-hidden bg-gray-100 flex justify-center items-center">
                {selectedTask.image ? (
                  <img
                    src={selectedTask.image}
                    alt="Task"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg" />
                )}
              </div>

              {/* Info right */}
              <div className="flex flex-col gap-3 font-inter flex-1">
                <h3 className="text-[16px] font-semibold text-black">
                  {selectedTask.title}
                </h3>
                <span className="text-sm font-medium">
                  Priority:{" "}
                  <span
                    className={`${
                      selectedTask.priority === "Low"
                        ? "text-green-600"
                        : selectedTask.priority === "Moderate"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {selectedTask.priority}
                  </span>
                </span>
                <span className="text-sm font-medium">
                  Status:{" "}
                  <span
                    className={`${
                      selectedTask.status === "Not Started"
                        ? "text-gray-500"
                        : selectedTask.status === "In Progress"
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    {selectedTask.status}
                  </span>
                </span>
                <span className="text-xs text-[#A1A3AB]">
                  Created on: {selectedTask.date || "—"}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="text-sm text-[#747474] font-inter leading-relaxed font-normal flex-1">
              <strong className="block mb-1">Task Description:</strong>
              <p>{selectedTask.description}</p>
            </div>

            {/* Actions fixed bottom-right */}
            <div className="absolute bottom-5 right-5 flex gap-3">
              <img
                src={deleteIcon}
                alt="Delete"
                title="Delete"
                className="w-9 h-9 cursor-pointer hover:scale-110 transition-transform"
                onClick={() => handleDelete(selectedTask.id)}
              />
              <img
                src={editIcon}
                alt="Edit"
                title="Edit"
                className="w-9 h-9 cursor-pointer hover:scale-110 transition-transform"
                onClick={() => {
                  setIsEditing(true);
                  setShowModal(true);
                }}
              />
            </div>
          </div>
        ) : (
          <div className="text-gray-400 text-center">
            Select a task to see details
          </div>
        )}
      </div>

      {/* Modal (Edit/Add) */}
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
}

export default MyTasks;


