const Button = ({
  text,
  type,
  onClick,
  disabled,
  confirmButton,
  cancelButton,
  normalButton
}: {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  confirmButton?: boolean;
  cancelButton?: boolean;
  normalButton?:boolean;
}) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`inline-flex h-10 rounded-md text-white px-8 text-sm font-medium shadow transition-colors duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 items-center
        ${disabled && "opacity-50"}
        ${
          confirmButton && "bg-blue-600 hover:bg-blue-600/80"
        },
        ${cancelButton && "bg-red-600 hover:bg-red-600/80"
        },
        ${
          normalButton && "bg-gray-800 hover:bg-gray-700/80"
        }
        `}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
