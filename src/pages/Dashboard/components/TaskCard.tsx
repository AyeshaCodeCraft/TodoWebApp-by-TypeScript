
// // src/pages/Dashboard/components/TaskCard/TaskCard.tsx
// import React from "react";

// interface Task {
//   id: string | number;
//   title: string;
//   description?: string;
//   status?: "Not Started" | "In Progress" | "Completed";
//   priority?: "Low" | "Medium" | "High";
//   date?: string;
//   image?: string;
// }

// interface TaskCardProps {
//   task: Task;
// }

// const statusColors: Record<string, string> = {
//   notstarted: "border-red-500",
//   inprogress: "border-blue-400",
//   completed: "border-green-600",
// };

// const priorityColors: Record<string, string> = {
//   low: "text-gray-500",
//   medium: "text-yellow-500",
//   high: "text-red-500",
// };

// const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
//   const statusClass = task.status
//     ? task.status.replace(/\s+/g, "").toLowerCase()
//     : "notstarted";
//   const priorityClass = task.priority ? task.priority.toLowerCase() : "low";

//   return (
//     <div className="border border-gray-300 rounded-xl p-4 mb-5 flex flex-col gap-4 shadow-sm bg-white">
//       {/* Header */}
//       <div className="flex items-center gap-2">
//         <div
//           className={`w-3.5 h-3.5 rounded-full border-2 ${statusColors[statusClass]}`}
//         />
//         <h3 className="text-black font-semibold text-base">{task.title}</h3>
//       </div>

//       {/* Body */}
//       <div className="flex justify-between gap-5">
//         <p className="flex-1 text-gray-500 text-sm">{task.description}</p>
//         <div className="w-30 h-24 rounded-md overflow-hidden flex items-center justify-center bg-gray-100">
//           {task.image ? (
//             <img
//               src={task.image}
//               alt="Task"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <div className="w-full h-full bg-gray-300 rounded-md" />
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="flex gap-3 text-gray-600 text-xs flex-wrap pt-2">
//         <span>
//           <strong className="text-black text-sm font-medium">Priority:</strong>{" "}
//           <span className={priorityColors[priorityClass]}>
//             {task.priority || "Low"}
//           </span>
//         </span>

//         <span>
//           <strong className="text-black text-sm font-medium">Status:</strong>{" "}
//           <span className={statusColors[statusClass].replace("border", "text")}>
//             {task.status || "Not Started"}
//           </span>
//         </span>

//         <span>
//           <strong className="text-black text-sm font-medium">Created on:</strong>{" "}
//           {task.date || "—"}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;









// src/pages/Dashboard/components/TaskCard/TaskCard.tsx
import React from "react";
import type { Task } from "../types";

interface TaskCardProps {
  task: Task;
}

const statusColors: Record<string, string> = {
  "not started": "border-red-500",
  "in progress": "border-blue-400",
  completed: "border-green-600",
};

const priorityColors: Record<string, string> = {
  low: "text-gray-500",
  moderate: "text-yellow-500",
  extreme: "text-red-500",
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const statusClass = task.status.toLowerCase();
  const priorityClass = task.priority ? task.priority.toLowerCase() : "low";

  return (
    <div className="border border-gray-300 rounded-xl p-4 mb-5 flex flex-col gap-4 shadow-sm bg-white">
      <div className="flex items-center gap-2">
        <div
          className={`w-3.5 h-3.5 rounded-full border-2 ${statusColors[statusClass]}`}
        />
        <h3 className="text-black font-semibold text-base">{task.title}</h3>
      </div>

      <div className="flex justify-between gap-5">
        <p className="flex-1 text-gray-500 text-sm">{task.description}</p>
        <div className="w-30 h-24 rounded-md overflow-hidden flex items-center justify-center bg-gray-100">
          {task.image ? (
            <img
              src={task.image}
              alt="Task"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-md" />
          )}
        </div>
      </div>

      <div className="flex gap-3 text-gray-600 text-xs flex-wrap pt-2">
        <span>
          <strong className="text-black text-sm font-medium">Priority:</strong>{" "}
          <span className={priorityColors[priorityClass]}>
            {task.priority || "Low"}
          </span>
        </span>

        <span>
          <strong className="text-black text-sm font-medium">Status:</strong>{" "}
          <span className={statusColors[statusClass].replace("border", "text")}>
            {task.status}
          </span>
        </span>

        <span>
          <strong className="text-black text-sm font-medium">Created on:</strong>{" "}
          {task.date || "—"}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
