interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: "blue" | "purple" | "teal" | "none";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  gradient = "none",
}) => {
  const baseClasses = "rounded-lg shadow-md overflow-hidden";

  const gradientClasses = {
    blue: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
    purple: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    teal: "bg-gradient-to-r from-teal-500 to-emerald-500 text-white",
    none: "bg-white text-gray-800",
  };

  return (
    <div className={`${baseClasses} ${gradientClasses[gradient]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
