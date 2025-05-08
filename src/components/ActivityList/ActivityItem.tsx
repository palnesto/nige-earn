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
        <span className="text-[0.6rem] sm:text-sm font-semibold text-gray-900 mb-1">
          {amount} coins
        </span>
        <span className="text-[0.5rem] sm:text-sm text-gray-500">
          {new Date(date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default ActivityItem;
