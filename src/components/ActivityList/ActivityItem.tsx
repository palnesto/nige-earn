// import { ChevronRight } from "lucide-react";

// interface ActivityItemProps {
//   icon: React.ReactNode;
//   activity: string;
//   date: string;
//   reward: {
//     amount: number;
//     status: "success" | "in-transit" | "pending";
//   };
// }

// const ActivityItem: React.FC<ActivityItemProps> = ({
//   icon,
//   activity,
//   date,
//   reward,
// }) => {
//   const statusColors = {
//     success: "text-green-600",
//     "in-transit": "text-blue-600",
//     pending: "text-amber-600",
//   };

//   return (
//     <div className="flex items-center justify-between p-4 bg-[#F2F2F2] rounded-full hover:bg-gray-100 transition-colors mb-2">
//       <div className="flex items-center space-x-5">
//         <div>{icon}</div>

//         <div className="font-medium">
//           <p className="text-gray-800">{activity}</p>
//           {/* <p className="text-sm text-gray-500">Won • {date}</p> */}
//           <p className="text-sm text-gray-500">+ {reward.amount} Coins</p>
//         </div>
//       </div>

//       <div className="flex items-center">
//         <div className="mr-3 text-right">
//           <p className="text-sm text-gray-500">Won • {date}</p>
//           {/* <p className="font-medium">+ {reward.amount} Coins</p> */}
//           <p className={`text-sm ${statusColors[reward.status]}`}>
//             {reward.status === "success"
//               ? "Success"
//               : reward.status === "in-transit"
//               ? "In-Transit"
//               : "Pending"}
//           </p>
//         </div>
//         <ChevronRight size={18} className="text-gray-400" />
//       </div>
//     </div>
//   );
// };

// export default ActivityItem;

// src/components/ActivityList/ActivityItem.tsx
interface ActivityItemProps {
  icon: React.ReactNode;
  label: string;
  description?: React.ReactNode;
  amount: number;
  date: string;
  cardClass: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  icon,
  label,
  description,
  amount,
  date,
  cardClass,
}) => {
  return (
    <div
      className={`${cardClass} flex items-center justify-between p-4 rounded-full mb-2`}
    >
      <div className="flex items-start space-x-4">
        <div>{icon}</div>
        <div>
          <p className="font-medium text-gray-800">{label}</p>
          {description}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="font-semibold text-gray-900 mb-1">{amount} coins</span>
        <span className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default ActivityItem;
