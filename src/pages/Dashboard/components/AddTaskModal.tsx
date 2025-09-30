
// // src/pages/Dashboard/components/AddTaskModal.tsx

// import { useState, useEffect, useRef } from "react";
// import type { ChangeEvent } from "react";


// import type { Task, Priority } from "../types";
// import imgicon from "/assets/imgicon.png";

// interface AddTaskModalProps {
//   onClose: () => void;
//   onSave: (task: Task) => void;
//   taskToEdit?: Task | null;
//   isEditing: boolean; // ✅ add this
// }

// const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose, onSave, taskToEdit }) => {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [priority, setPriority] = useState<Priority>("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState<string>(""); 

//   const fileInputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (taskToEdit) {
//       setTitle(taskToEdit.title);
//       setDate(taskToEdit.date);
//       setPriority(taskToEdit.priority);
//       setDescription(taskToEdit.description);
//       setImage(taskToEdit.image || "");
//     } else {
//       setTitle("");
//       setDate("");
//       setPriority("");
//       setDescription("");
//       setImage("");
//     }
//   }, [taskToEdit]);

//   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onloadend = () => setImage(reader.result as string);
//     reader.readAsDataURL(file);
//   };

//   const handleSave = () => {
//     if (!title || !date || !priority) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     const newTask: Task = {
//       id: taskToEdit ? taskToEdit.id : Date.now(),
//       title,
//       date,
//       priority,
//       description,
//       status: taskToEdit ? taskToEdit.status : "Not Started",
//       image,
//     };

//     onSave(newTask);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
//       <div className="w-full max-w-[918px] bg-gray-100 rounded-lg p-8 flex flex-col gap-6">
//         <div className="flex justify-between items-center mb-8">
//           <h2>{taskToEdit ? "Edit Task" : "Add New Task"}</h2>
//           <button onClick={onClose}>Go back</button>
//         </div>

//         {/* Form */}
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

//         {/* Priority */}
//         <div>
//           {["Extreme", "Moderate", "Low"].map((level) => (
//             <label key={level}>
//               <input
//                 type="radio"
//                 name="priority"
//                 value={level}
//                 checked={priority === level}
//                 onChange={() => setPriority(level as Priority)}
//               />
//               {level}
//             </label>
//           ))}
//         </div>

//         {/* Description */}
//         <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />

//         {/* Image */}
//         <div>
//           {!image ? (
//             <>
//               <img src={imgicon} alt="Upload" />
//               <button onClick={() => fileInputRef.current?.click()}>Browse</button>
//               <input type="file" ref={fileInputRef} onChange={handleImageUpload} hidden />
//             </>
//           ) : (
//             <>
//               <img src={image} alt="Preview" />
//               <button onClick={() => setImage("")}>Remove</button>
//             </>
//           )}
//         </div>

//         <button onClick={handleSave}>{taskToEdit ? "Update Task" : "Done"}</button>
//       </div>
//     </div>
//   );
// };

// export default AddTaskModal;






// import { useState, useEffect, useRef} from "react";
// import type { ChangeEvent } from "react";

// import type { Task, Priority } from "../types";
// import imgicon from "/assets/imgicon.png";

// interface AddTaskModalProps {
//   onClose: () => void;
//   onSave: (task: Task) => void;
//   taskToEdit?: Task | null;
// }

// const AddTaskModal: React.FC<AddTaskModalProps> = ({
//   onClose,
//   onSave,
//   taskToEdit,
// }) => {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [priority, setPriority] = useState<Priority>("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState<string>("");

//   const fileInputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (taskToEdit) {
//       setTitle(taskToEdit.title);
//       setDate(taskToEdit.date);
//       setPriority(taskToEdit.priority);
//       setDescription(taskToEdit.description);
//       setImage(taskToEdit.image || "");
//     } else {
//       setTitle("");
//       setDate("");
//       setPriority("");
//       setDescription("");
//       setImage("");
//     }
//   }, [taskToEdit]);

//   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onloadend = () => setImage(reader.result as string);
//     reader.readAsDataURL(file);
//   };

//   const handleSave = () => {
//     if (!title || !date || !priority) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     const newTask: Task = {
//       id: taskToEdit ? taskToEdit.id : Date.now(),
//       title,
//       date,
//       priority,
//       description,
//       status: taskToEdit ? taskToEdit.status : "Not Started",
//       image,
//     };

//     onSave(newTask);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
//       <div className="w-[918px] bg-[#F9F9F9] rounded-xl shadow-2xl p-6 flex flex-col gap-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-black font-montserrat font-semibold text-lg">
//             {taskToEdit ? "Edit Task" : "Add New Task"}
//           </h2>
//           <button
//             onClick={onClose}
//             className="text-sm font-montserrat font-semibold underline cursor-pointer"
//           >
//             Go back
//           </button>
//         </div>

//         {/* Title + Date */}
//         <div className="flex gap-6">
//           <div className="flex flex-col flex-1">
//             <label className="mb-2 font-montserrat text-sm font-semibold text-black">
//               Title
//             </label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="p-3 border border-[#A1A3AB] rounded-lg bg-[#F9F9F9] text-sm outline-none"
//             />
//           </div>
//           <div className="flex flex-col flex-1">
//             <label className="mb-2 font-montserrat text-sm font-semibold text-black">
//               Date
//             </label>
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               min={new Date().toISOString().split("T")[0]}
//               className="p-3 border border-[#A1A3AB] rounded-lg bg-[#F9F9F9] text-sm outline-none"
//             />
//           </div>
//         </div>

//         {/* Priority */}
//         <div>
//           <label className="block mb-3 font-montserrat font-semibold text-sm text-black">
//             Priority
//           </label>
//           <div className="flex gap-6">
//             {["Extreme", "Moderate", "Low"].map((level) => (
//               <label
//                 key={level}
//                 className="flex items-center gap-2 cursor-pointer text-sm"
//               >
//                 <input
//                   type="radio"
//                   name="priority"
//                   value={level}
//                   checked={priority === level}
//                   onChange={() => setPriority(level as Priority)}
//                   className="cursor-pointer"
//                 />
//                 {level}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Description + Upload */}
//         <div className="flex gap-6">
//           {/* Description */}
//           <div className="flex flex-col flex-1">
//             <label className="mb-2 font-montserrat text-sm font-medium text-black">
//               Task Description
//             </label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Start writing here..."
//               className="p-3 h-[205px] resize-none border border-[#A1A3AB] rounded-lg bg-[#F9F9F9] text-sm outline-none"
//             />
//           </div>

//           {/* Upload */}
//           <div className="w-[230px] h-[205px] border border-gray-300 rounded-xl flex flex-col justify-center items-center bg-[#FAFAFA]">
//             {!image ? (
//               <div className="flex flex-col items-center gap-3 text-gray-500">
//                 <img src={imgicon} alt="upload" className="w-10 h-10" />
//                 <p className="text-xs text-center">Drag & Drop files here or</p>
//                 <button
//                   type="button"
//                   onClick={() => fileInputRef.current?.click()}
//                   className="px-4 py-1 border border-gray-300 rounded-lg text-sm text-gray-500 cursor-pointer"
//                 >
//                   Browse
//                 </button>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   ref={fileInputRef}
//                   onChange={handleImageUpload}
//                   hidden
//                 />
//               </div>
//             ) : (
//               <div className="flex flex-col items-center gap-2">
//                 <img
//                   src={image}
//                   alt="Preview"
//                   className="max-w-[150px] max-h-[150px] rounded-lg shadow-md object-cover"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setImage("")}
//                   className="px-3 py-1 text-xs rounded-md bg-red-500 text-white hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-end">
//           <button
//             onClick={handleSave}
//             className="px-6 py-2 bg-[#F24E1E] hover:bg-[#D63B10] text-white rounded-lg font-montserrat font-medium text-sm"
//           >
//             {taskToEdit ? "Update Task" : "Done"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTaskModal;
















// src/pages/Dashboard/components/AddTaskModal.tsx

import { useState, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";

import type { Task, Priority } from "../types";
import imgicon from "/assets/imgicon.png";

interface AddTaskModalProps {
  onClose: () => void;
  onSave: (task: Task) => void;
  taskToEdit?: Task | null;
  isEditing: boolean;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  onClose,
  onSave,
  taskToEdit,
}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState<Priority>("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDate(taskToEdit.date);
      setPriority(taskToEdit.priority);
      setDescription(taskToEdit.description);
      setImage(taskToEdit.image || "");
    } else {
      setTitle("");
      setDate("");
      setPriority("");
      setDescription("");
      setImage("");
    }
  }, [taskToEdit]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!title || !date || !priority) {
      alert("Please fill in all required fields");
      return;
    }

    const newTask: Task = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      date,
      priority,
      description,
      status: taskToEdit ? taskToEdit.status : "Not Started",
      image,
    };

    onSave(newTask);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="w-[918px] bg-[#F9F9F9] rounded-xl shadow-2xl p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-black font-montserrat font-semibold text-lg">
            {taskToEdit ? "Edit Task" : "Add New Task"}
          </h2>
          <button
            onClick={onClose}
            className="text-sm font-montserrat font-semibold underline cursor-pointer"
          >
            Go back
          </button>
        </div>

        {/* Title + Date side by side */}
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 min-w-0">
            <label className="mb-2 font-montserrat text-sm font-semibold text-black">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-[#A1A3AB] rounded-lg bg-white text-sm outline-none"
            />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <label className="mb-2 font-montserrat text-sm font-semibold text-black">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full p-3 border border-[#A1A3AB] rounded-lg bg-white text-sm outline-none"
            />
          </div>
        </div>

        {/* Priority row */}
        <div>
          <label className="block mb-3 font-montserrat font-semibold text-sm text-black">
            Priority
          </label>
          <div className="flex gap-6">
            {["Extreme", "Moderate", "Low"].map((level) => (
              <label
                key={level}
                className="flex items-center gap-2 cursor-pointer text-sm"
              >
                <input
                  type="radio"
                  name="priority"
                  value={level}
                  checked={priority === level}
                  onChange={() => setPriority(level as Priority)}
                  className="cursor-pointer"
                />
                {level}
              </label>
            ))}
          </div>
        </div>

        {/* Description + Upload */}
        <div className="flex gap-6">
          {/* Description */}
          <div className="flex flex-col flex-1 min-w-0">
            <label className="mb-2 font-montserrat text-sm font-medium text-black">
              Task Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Start writing here..."
              className="w-full p-3 h-[205px] resize-none border border-[#A1A3AB] rounded-lg bg-white text-sm outline-none"
            />
          </div>

          {/* Upload */}
          <div className="w-[230px] h-[205px] border border-gray-300 rounded-xl flex flex-col justify-center items-center bg-[#FAFAFA]">
            {!image ? (
              <div className="flex flex-col items-center gap-3 text-gray-500">
                <img src={imgicon} alt="upload" className="w-10 h-10" />
                <p className="text-xs text-center">Drag & Drop files here or</p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-1 border border-gray-300 rounded-lg text-sm text-gray-500 cursor-pointer"
                >
                  Browse
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  hidden
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <img
                  src={image}
                  alt="Preview"
                  className="max-w-[150px] max-h-[150px] rounded-lg shadow-md object-cover"
                />
                <button
                  type="button"
                  onClick={() => setImage("")}
                  className="px-3 py-1 text-xs rounded-md bg-red-500 text-white hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer - Done button fixed to right */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-[#F24E1E] hover:bg-[#D63B10] text-white rounded-lg font-montserrat font-medium text-sm"
          >
            {taskToEdit ? "Update Task" : "Done"}
          </button>
        </div>
      </div>
    </div>

  );
};

export default AddTaskModal;
