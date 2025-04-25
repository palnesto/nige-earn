import React from "react";

interface ActionCardProps {
  title: string;
  icon?: React.ReactNode;
  gradient?: "blue" | "purple" | "teal";
  buttonText: string;
  onAction: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  icon,
  gradient = "blue",
  buttonText,
  onAction,
}) => {
  const gradientClasses = {
    blue: "bg-gradient-to-r from-blue-500 to-cyan-500",
    purple: "bg-gradient-to-r from-purple-400 to-pink-500",
    teal: "bg-gradient-to-r from-teal-500 to-emerald-500",
  };

  return (
    <div
      className={`${gradientClasses[gradient]} rounded-xl p-5 text-white h-36 flex flex-col justify-between w-full`}
    >
      <div className="flex items-start justify-between">
        <h3 className="font-medium text-sm">{title}</h3>
        {icon && <div className="text-white">{icon}</div>}
      </div>
      <div className="mt-auto">
        <button
          onClick={onAction}
          className="px-3 py-1.5 bg-black text-white text-xs rounded-md hover:opacity-80 transition-opacity"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ActionCard;
