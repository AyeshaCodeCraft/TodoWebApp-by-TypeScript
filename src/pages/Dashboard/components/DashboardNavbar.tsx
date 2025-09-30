
// // src/pages/Dashboard/components/DashboardNavbar.tsx

// import { useState, useEffect, useRef } from "react";
// import type { ChangeEvent } from "react";

// import type { Task } from "../types";
// import { normalizeTask } from "../types";


// const searchIcon = "/assets/SearchICon.png";
// const notificationIcon = "/assets/Notifications.png";
// const calIcon = "/assets/Cal.png";

// interface DashboardNavbarProps {
//   onTaskSelect: (task: Task) => void;
// }

// const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ onTaskSelect }) => {
//   const today = new Date();
//   const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
//   const dateStr = today.toLocaleDateString("en-GB");

//   const [query, setQuery] = useState("");
//   const [filtered, setFiltered] = useState<Task[]>([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Load tasks safely from localStorage
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//   const tasks: Task[] = (storedUser.todos || []).map(normalizeTask);

//   // Filter tasks based on search query
//   useEffect(() => {
//     if (!query.trim()) {
//       setFiltered([]);
//       setShowDropdown(false);
//       return;
//     }

//     const results = tasks.filter((task) =>
//       task.title.toLowerCase().includes(query.toLowerCase())
//     );
//     setFiltered(results);
//     setShowDropdown(results.length > 0);
//   }, [query, tasks]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div ref={dropdownRef} className="w-full bg-gray-100 pt-8 pb-6 mb-[48px] shadow-md">
//       <div className="max-w-[1440px] mx-auto flex items-center justify-between flex-wrap gap-5 px-4">
//         {/* Left: Dashboard title */}
//         <h2 className="text-2xl font-semibold text-red-500">
//           Dash<span className="text-black">board</span>
//         </h2>

//         {/* Center: Search input */}
//         <div className="flex-1 min-w-0 flex justify-center mr-5">
//           <div className="relative w-full max-w-[695px] shadow-md">
//             <input
//               type="text"
//               value={query}
//               onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
//               onFocus={() => query && setShowDropdown(true)}
//               placeholder="Search your task here..."
//               className="w-full h-9 px-2 pr-9 rounded-md border-none outline-none focus:shadow-lg"
//             />
//             <img
//               src={searchIcon}
//               alt="search"
//               className="absolute right-0 top-1/2 w-9 h-9 -translate-y-1/2 cursor-pointer"
//             />

//             {/* Dropdown with filtered tasks */}
//             {showDropdown && filtered.length > 0 && (
//               <div className="absolute top-full left-0 w-full bg-white border rounded-md max-h-52 overflow-y-auto z-50">
//                 {filtered.map((task) => (
//                   <div
//                     key={task.id}
//                     className="p-2 cursor-pointer hover:bg-gray-100"
//                     onClick={() => {
//                       onTaskSelect(task);
//                       setShowDropdown(false);
//                       setQuery("");
//                     }}
//                   >
//                     {task.title}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right: Icons + Date */}
//         <div className="flex items-center gap-5">
//           <div className="flex gap-4">
//             <img src={notificationIcon} alt="notification" className="w-8 h-8 cursor-pointer" />
//             <img src={calIcon} alt="calendar" className="w-8 h-8 cursor-pointer" />
//           </div>
//           <div className="flex flex-col text-left pr-8">
//             <span className="text-black font-medium text-sm">{dayName}</span>
//             <span className="text-blue-400 font-medium text-sm">{dateStr}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardNavbar;


















// src/pages/Dashboard/components/DashboardNavbar.tsx
import { useState, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";

import type { Task } from "../types";
import { normalizeTask } from "../types";

const searchIcon = "/assets/SearchICon.png";
const notificationIcon = "/assets/Notifications.png";
const calIcon = "/assets/Cal.png";

interface DashboardNavbarProps {
  onTaskSelect: (task: Task) => void;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ onTaskSelect }) => {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = today.toLocaleDateString("en-GB");

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Task[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 🔥 Fixed: filter tasks based on search query
  useEffect(() => {
    if (!query.trim()) {
      setFiltered([]);
      setShowDropdown(false);
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const tasks: Task[] = (storedUser.todos || []).map(normalizeTask);

    const results = tasks.filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
    setShowDropdown(results.length > 0);
  }, [query]); // ✅ only depends on query

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="w-full bg-gray-100 pt-8 pb-6 mb-[48px] shadow-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between flex-wrap gap-5 px-4">
        {/* Left: Dashboard title */}
        <h2 className="text-2xl font-semibold text-red-500">
          Dash<span className="text-black">board</span>
        </h2>

        {/* Center: Search input */}
        <div className="flex-1 min-w-0 flex justify-center mr-5">
          <div className="relative w-full max-w-[695px] shadow-md">
            <input
              type="text"
              value={query}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              onFocus={() => query && setShowDropdown(true)}
              placeholder="Search your task here..."
              className="w-full h-9 px-2 pr-9 rounded-md border-none outline-none focus:shadow-lg"
            />
            <img
              src={searchIcon}
              alt="search"
              className="absolute right-0 top-1/2 w-9 h-9 -translate-y-1/2 cursor-pointer"
            />

            {/* Dropdown with filtered tasks */}
            {showDropdown && filtered.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border rounded-md max-h-52 overflow-y-auto z-50">
                {filtered.map((task) => (
                  <div
                    key={task.id}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      onTaskSelect(task);
                      setShowDropdown(false);
                      setQuery("");
                    }}
                  >
                    {task.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Icons + Date */}
        <div className="flex items-center gap-5">
          <div className="flex gap-4">
            <img src={notificationIcon} alt="notification" className="w-8 h-8 cursor-pointer" />
            <img src={calIcon} alt="calendar" className="w-8 h-8 cursor-pointer" />
          </div>
          <div className="flex flex-col text-left pr-8">
            <span className="text-black font-medium text-sm">{dayName}</span>
            <span className="text-blue-400 font-medium text-sm">{dateStr}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
