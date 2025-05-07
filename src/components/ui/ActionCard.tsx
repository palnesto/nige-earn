// import React from "react";

// interface ActionCardProps {
//   title: string;
//   icon?: React.ReactNode;
//   gradient?:
//     | "greenBlue"
//     | "purpleRed"
//     | "purplePink"
//     | "purpleLavender"
//     | "blueTeal";
//   buttonText: string;
//   onAction: () => void;
// }

// const ActionCard: React.FC<ActionCardProps> = ({
//   title,
//   icon,
//   gradient = "greenBlue",
//   buttonText,
//   onAction,
// }) => {
//   const gradientClasses = {
//     greenBlue: "bg-gradient-to-r from-green-500 to-blue-500",
//     purpleRed: "bg-gradient-to-r from-purple-800 to-pink-500",
//     purplePink: "bg-gradient-to-r from-purple-600 to-pink-500",
//     purpleLavender: "bg-gradient-to-r from-purple-800 to-purple-300",
//     blueTeal: "bg-gradient-to-r from-blue-700 to-teal-400",
//   };

//   return (
//     <div
//       className={`${gradientClasses[gradient]} rounded-xl p-5 text-white h-36 flex flex-col justify-between w-full`}
//     >
//       <div className="flex items-start justify-between">
//         <h3 className="font-medium text-sm">{title}</h3>
//         {icon && <div className="text-white">{icon}</div>}
//       </div>
//       <div className="mt-auto">
//         <button
//           onClick={onAction}
//           className="px-3 py-1.5 bg-black text-white text-xs rounded-md hover:opacity-80 transition-opacity"
//         >
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ActionCard;

// src/components/ui/ActionCard.tsx
import React from "react";

interface ActionCardProps {
  title: string;
  icon?: React.ReactNode;
  gradient?:
    | "greenBlue"
    | "purpleRed"
    | "purplePink"
    | "purpleLavender"
    | "blueTeal";
  buttonText: string; // badge text
  onAction: () => void; // called on click
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  icon,
  gradient = "greenBlue",
  buttonText,
  onAction,
}) => {
  const gradientClasses = {
    greenBlue: "bg-gradient-to-r from-green-500 to-blue-500",
    purpleRed: "bg-gradient-to-r from-purple-800 to-pink-500",
    purplePink: "bg-gradient-to-r from-purple-600 to-pink-500",
    purpleLavender: "bg-gradient-to-r from-purple-800 to-purple-300",
    blueTeal: "bg-gradient-to-r from-blue-700 to-teal-400",
  };

  return (
    <div
      onClick={onAction}
      className={`
        ${gradientClasses[gradient]}
        relative rounded-xl p-5 text-white
        h-36 flex flex-col justify-start
        cursor-pointer overflow-hidden
      `}
    >
      {/* badge + icon row */}
      <div className="flex justify-between items-start">
        <span className="inline-block bg-white/90 text-black text-xs font-medium px-3 py-1 rounded-full">
          {buttonText}
        </span>
        {icon && <div className="w-10 h-10">{icon}</div>}
      </div>

      {/* title */}
      <h3 className="mt-4 text-lg font-semibold leading-snug">{title}</h3>
    </div>
  );
};

export default ActionCard;
