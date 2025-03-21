import { Home, Users, FileText, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../global/Logo";

interface SidebarProps {
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ setSidebarOpen }: SidebarProps) => {
  return (
    <aside className="w-64 h-screen bg-white shadow-md p-5 flex flex-col relative">
      {/* Close Button for Mobile */}
      <button
        className="absolute top-4 right-4 md:hidden text-gray-600"
        onClick={() => setSidebarOpen(false)}
      >
        <X size={24} />
      </button>

      <div className="flex items-center justify-center">
        <Logo />
      </div>

      <nav className="flex flex-col gap-4 mt-10">
        <NavLink
          to="/dashboard/verifiers"
          className={({ isActive }) =>
            `p-3 rounded-md flex items-center gap-3 hover:text-blue-600 ${
              isActive ? "bg-[#F2FAFF] text-blue-600 border-l-4 border-[#039BF0]" : "text-[#1A1619]"
            }`
          }
        >
          <Users size={20} /> Verifiers
        </NavLink>
        <NavLink
          to="/dashboard/deals"
          className={({ isActive }) =>
            `p-3 rounded-md flex items-center gap-3 hover:text-blue-600 ${
              isActive ? "bg-[#F2FAFF] border-l-4 border-[#039BF0] text-blue-600" : "text-[#1A1619]"
            }`
          }
        >
          <FileText size={20} /> Deals
        </NavLink>
        <NavLink
          to="/dashboard/transactions"
          className={({ isActive }) =>
            `p-3 rounded-md flex items-center gap-3 hover:text-blue-600 ${
              isActive ? "bg-[#F2FAFF] border-l-4 border-[#039BF0] text-blue-600" : "text-gray-700"
            }`
          }
        >
          <Home size={20} /> Transactions
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
