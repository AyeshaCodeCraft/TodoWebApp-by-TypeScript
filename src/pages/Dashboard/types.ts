

// src/pages/Dashboard/types.ts
export type Priority = "Low" | "Moderate" | "Extreme" | "";
export type Status = "Not Started" | "In Progress" | "Completed";

export interface Task {
  id: string | number;
  title: string;
  date: string;
  priority: Priority;
  description: string;
  status: Status;
  image?: string;
}

export interface User {
  id: string | number;
  todos: Task[];
  [key: string]: any;
}

// Normalize tasks from JSON / localStorage
export const normalizeTask = (task: any): Task => ({
  id: task.id,
  title: task.title || "Untitled",
  date: task.date || "",
  priority: ["Low", "Moderate", "Extreme"].includes(task.priority)
    ? (task.priority as Priority)
    : "",
  description: task.description || "",
  status: ["Not Started", "In Progress", "Completed"].includes(task.status)
    ? (task.status as Status)
    : "Not Started",
  image: task.image || "",
});
