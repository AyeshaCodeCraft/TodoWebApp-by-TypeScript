
// src/pages/Dashboard/components/AddTaskModal.tsx

import { useState, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";


import type { Task, Priority } from "../types";
import imgicon from "/assets/imgicon.png";

interface AddTaskModalProps {
  onClose: () => void;
  onSave: (task: Task) => void;
  taskToEdit?: Task | null;
  isEditing: boolean; // ✅ add this
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose, onSave, taskToEdit }) => {
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
      <div className="w-full max-w-[918px] bg-gray-100 rounded-lg p-8 flex flex-col gap-6">
        <div className="flex justify-between items-center mb-8">
          <h2>{taskToEdit ? "Edit Task" : "Add New Task"}</h2>
          <button onClick={onClose}>Go back</button>
        </div>

        {/* Form */}
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        
        {/* Priority */}
        <div>
          {["Extreme", "Moderate", "Low"].map((level) => (
            <label key={level}>
              <input
                type="radio"
                name="priority"
                value={level}
                checked={priority === level}
                onChange={() => setPriority(level as Priority)}
              />
              {level}
            </label>
          ))}
        </div>

        {/* Description */}
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />

        {/* Image */}
        <div>
          {!image ? (
            <>
              <img src={imgicon} alt="Upload" />
              <button onClick={() => fileInputRef.current?.click()}>Browse</button>
              <input type="file" ref={fileInputRef} onChange={handleImageUpload} hidden />
            </>
          ) : (
            <>
              <img src={image} alt="Preview" />
              <button onClick={() => setImage("")}>Remove</button>
            </>
          )}
        </div>

        <button onClick={handleSave}>{taskToEdit ? "Update Task" : "Done"}</button>
      </div>
    </div>
  );
};

export default AddTaskModal;
