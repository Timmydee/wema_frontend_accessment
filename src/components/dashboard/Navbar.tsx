import { ChevronDown, Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Indicator from "../../assets/Indicator.svg";
import Alert from "../../assets/Alert.svg";
import { useAuth } from "../../hooks/useAuthContext";
import { useState } from "react";
import Profile from "../../assets/Profile.webp";

interface NavbarProps {
  setSidebarOpen: (open: boolean) => void;
}

const Navbar = ({ setSidebarOpen }: NavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate()
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard/verifiers":
        return "Verifiers";
      case "/dashboard/deals":
        return "Deals";
      case "/dashboard/transactions":
        return "Transactions";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="bg-white shadow flex items-center justify-between p-4">
      <button
        className="md:hidden text-gray-600"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={24} />
      </button>

      <div className="flex items-center justify-center gap-2">
        <h2 className="text-[24px] font-bold">{getTitle()}</h2>
        <img src={Indicator} alt="indicator" />
      </div>

      <div className="flex items-center gap-4 relative">
        <img src={Alert} alt="Alert Icon" />

        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={toggleDropdown}
        >
          {user?.businessLogo ? (
            <img
              src={
                user?.businessLogo instanceof File
                  ? URL.createObjectURL(user.businessLogo)
                  : user?.businessLogo ?? ""
              }
              alt="User Logo"
              width={44}
              height={44}
              className="rounded-full"
            />
          ) : (
            <img
              src={Profile}
              alt="User Logo"
              width={44}
              height={44}
              className="rounded-full"
            />
          )}

          <button className="text-gray-600 hover:text-blue-600">
            <ChevronDown size={24} />
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-7 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-[#EBEFF2] z-50 hover:bg-red-100 cursor-pointer">
            <ul className="py-2">
              <li
                className="px-4 text-red-600 "
                onClick={() => {
                  logout();
                  navigate("/signin");
                  setIsOpen(false);
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
