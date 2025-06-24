import { useState } from "react";

const Button = ({ children, className = "", ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        relative flex items-center justify-center
        h-10 min-w-[120px] px-5
        bg-[#06402b] hover:bg-[#51A687]
        cursor-pointer
        text-white font-medium
        transition-all duration-300 ease-in-out rounded-4xl
        ${isHovered ? "pr-[50px]" : "pr-5"}
        overflow-hidden
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
      <div
        className={`
        absolute right-3
        w-5 h-5 flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"}
      `}
      >
        <img src="/hexagon-icon.png" alt="" />
      </div>
    </button>
  );
};

export default Button;
