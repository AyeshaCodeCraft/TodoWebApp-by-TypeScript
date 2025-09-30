
// src/pages/Dashboard/TaskDetails/TaskDetails.tsx
import type { Task} from "../types"; // unified Task type

interface TaskDetailsProps {
  task: Task | null;
  onClose: () => void;
  onDelete: (id: string | number) => void;
  onUpdateStatus: (id: string | number, status: Task["status"]) => void;
  onEdit: (task: Task) => void;
  variant?: "inline" | "overlay";
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  task,
  onClose,
  onDelete,
  onUpdateStatus,
  onEdit,
  variant = "inline",
}) => {
  if (!task) return null;

  // Priority colors
  const priorityColors: Record<Task["priority"], string> = {
    "": "text-gray-400",
    Low: "text-red-500",
    Moderate: "text-blue-600",
    Extreme: "text-red-800",
  };

  // Status colors
  const statusColors: Record<Task["status"], string> = {
     //"": "text-gray-400",
    "Not Started": "text-red-500",
    "In Progress": "text-blue-600",
    Completed: "text-green-500",
  };

  return (
    <div
      className={
        variant === "overlay"
          ? "bg-white rounded-xl p-6 w-full max-w-[960px] mx-auto flex flex-col gap-5"
          : "bg-gray-100 border border-gray-400 rounded-xl p-5 ml-8 w-[959px] min-h-[600px] flex flex-col gap-5"
      }
    >
      {/* Go Back */}
      <span
        className="self-end text-red-500 font-medium text-sm cursor-pointer hover:underline"
        onClick={onClose}
      >
        Go Back
      </span>

      {/* Top section */}
      <div className="flex items-start gap-6">
        {task.image && (
          <img
            src={task.image}
            alt="Task"
            className="w-44 h-32 object-cover rounded-xl flex-shrink-0"
          />
        )}

        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold text-gray-800">{task.title}</h2>

          <span className="text-sm font-semibold text-gray-900">
            Priority:{" "}
            <span className={priorityColors[task.priority]}>{task.priority || "—"}</span>
          </span>

          <span className="text-sm font-semibold text-gray-900">
            Status:{" "}
            <span className={statusColors[task.status]}>{task.status || "—"}</span>
          </span>

          <span className="text-sm font-normal text-gray-600">
            Date: {task.date || "—"}
          </span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-1">Description</h4>
        <p className="text-gray-700 text-base">
          {task.description || "No description provided."}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-5 mt-auto">
        <img
          src="/assets/not started.jpg"
          alt="Not Started"
          title="Mark as Not Started"
          className="w-8 h-8 cursor-pointer transform transition-transform hover:scale-110"
          onClick={() => onUpdateStatus(task.id, "Not Started")}
        />
        <img
          src="/assets/progress.png"
          alt="In Progress"
          title="Mark as In Progress"
          className="w-8 h-8 cursor-pointer transform transition-transform hover:scale-110"
          onClick={() => onUpdateStatus(task.id, "In Progress")}
        />
        <img
          src="/assets/completedTodo.png"
          alt="Completed"
          title="Mark as Completed"
          className="w-8 h-8 cursor-pointer transform transition-transform hover:scale-110"
          onClick={() => onUpdateStatus(task.id, "Completed")}
        />
        <img
          src="/assets/edit.png"
          alt="Edit"
          title="Edit Task"
          className="w-8 h-8 cursor-pointer transform transition-transform hover:scale-110"
          onClick={() => onEdit(task)}
        />
        <img
          src="/assets/delete.png"
          alt="Delete"
          title="Delete"
          className="w-8 h-8 cursor-pointer transform transition-transform hover:scale-110"
          onClick={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default TaskDetails;
