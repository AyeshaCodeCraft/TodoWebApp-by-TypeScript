
// src/pages/Dashboard/components/Sidebar/Sidebar.tsx
import { NavLink, useNavigate } from "react-router-dom";
import dashboardIcon from "/assets/dashboard.svg";
import vitalTaskIcon from "/assets/vital-task.svg";
import myTaskIcon from "/assets/my task.svg";
import categoriesIcon from "/assets/Task Categories.svg";
import settingsIcon from "/assets/Settings.svg";
import helpIcon from "/assets/Help.svg";
import logoutIcon from "/assets/logout.svg";

interface MenuItem {
  name: string;
  icon: string;
  path: string;
  exact?: boolean;
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const firstName = user.firstName || "John";
  const lastName = user.lastName || "Doe";
  const email = user.email || "john@example.com";

  const menuItems: MenuItem[] = [
    { name: "Dashboard", icon: dashboardIcon, path: "/dashboard", exact: true },
    { name: "Vital Task", icon: vitalTaskIcon, path: "/dashboard/vital-task" },
    { name: "My Task", icon: myTaskIcon, path: "/dashboard/my-task" },
    { name: "Task Categories", icon: categoriesIcon, path: "/dashboard/categories" },
    { name: "Settings", icon: settingsIcon, path: "/dashboard/settings" },
    { name: "Help", icon: helpIcon, path: "/dashboard/help" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-full max-w-[344px] bg-[#FF6767] text-white rounded-lg shadow-md flex-shrink-0 flex flex-col">
      {/* User Info */}
      <div className="pt-8 pl-10 pb-4">
        <h3 className="text-3xl font-medium">{firstName} {lastName}</h3>
        <p className="text-xs font-normal">{email}</p>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-2 mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-12 py-5 w-[271px] h-[59px] rounded-[14px] text-sm font-medium transition-all ${
                isActive
                  ? "bg-white text-red-500 ml-7"
                  : "bg-[#FF6767] text-white ml-0"
              }`
            }
            end={item.path === "/dashboard"}
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.name}
              className="w-6 h-6 flex-shrink-0"
            />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <div className="mt-auto pt-12 px-12">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-white font-medium text-base cursor-pointer"
        >
          <img src={logoutIcon} alt="Logout" className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;



