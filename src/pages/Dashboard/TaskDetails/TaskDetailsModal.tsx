

// src/pages/Dashboard/TaskDetails/TaskDetailsModal.tsx
import type { Task, Status } from "../types";
import TaskDetails from "./TaskDetails";

// interface TaskDetailsModalProps {
//   task: Task | null;
//   onClose: () => void;
//   onDelete: (id: string | number) => void;
//   onUpdateStatus: (id: string | number, status: string) => void;
//   onEdit: (task: Task) => void;
// }

interface TaskDetailsModalProps {
  task: Task | null;
  onClose: () => void;
  onDelete: (id: string | number) => void;
  onUpdateStatus: (id: string | number, status: Status) => void; // use Status type
  onEdit: (task: Task) => void;
}


const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({
  task,
  onClose,
  onDelete,
  onUpdateStatus,
  onEdit,
}) => {
  if (!task) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-gray-100 rounded-xl p-5 w-full max-w-[1000px] max-h-[90vh] flex flex-col gap-5 overflow-auto">
        <TaskDetails
          task={task}
          onClose={onClose}
          onDelete={onDelete}
          onUpdateStatus={onUpdateStatus}
          onEdit={onEdit}
        />
      </div>
    </div>
  );
};

export default TaskDetailsModal;
