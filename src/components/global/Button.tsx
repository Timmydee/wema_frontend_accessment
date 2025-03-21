import { FC } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ 
  type = "button", 
  children, 
  className = "", 
  disabled = false, 
  onClick 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#039BF0] text-white font-bold h-[56px] rounded-md mt-6 cursor-pointer hover:bg-blue-700 transition ${disabled
        ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300"
        : "hover:bg-[#039BF0] cursor-pointer"} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
