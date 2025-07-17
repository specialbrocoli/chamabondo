import { useState } from "react";

const Button2 = ({ children, className = "", ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        relative flex items-center justify-center
        h-10 min-w-[120px] px-5
        bg-white hover:bg-[#b2f8deef]
        cursor-pointer
        border-2
        text-[#005637] font-medium
        transition-all duration-700 ease-in-out rounded-4xl
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
        transition-all duration-700 ease-in-out
        ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"}
      `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#005637"
            d="M8.027 20.5q-.435 0-.808-.215q-.373-.214-.59-.593l-3.992-6.884q-.218-.38-.218-.808t.217-.808L6.63 4.308q.217-.38.59-.594t.808-.214h7.946q.435 0 .808.214q.373.215.59.594l3.993 6.884q.217.38.217.808t-.217.808l-3.993 6.884q-.217.38-.59.594t-.808.214zm-.02-1h7.966q.154 0 .298-.077q.145-.077.24-.23l3.968-6.885q.096-.154.096-.308t-.096-.308l-3.967-6.884q-.096-.154-.24-.231q-.145-.077-.299-.077H8.008q-.154 0-.289.077t-.23.23l-3.993 6.885Q3.4 11.846 3.4 12t.096.308l3.993 6.884q.096.154.23.231q.135.077.289.077M12 12"
            stroke-width="0.7"
            stroke="#005637"
          />
        </svg>
      </div>
    </button>
  );
};

export default Button2;
