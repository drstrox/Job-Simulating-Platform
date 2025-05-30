const LoadingSpinner = ({ size = "md", color = "purple" }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  };

  const colorClasses = {
    purple: "border-purple-500",
    blue: "border-blue-500",
    green: "border-green-500"
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div className={`animate-spin rounded-full ${sizeClasses[size]} border-b-4 ${colorClasses[color]}`}></div>
        <div className={`absolute inset-0 animate-ping rounded-full ${sizeClasses[size]} border-b-4 ${colorClasses[color]} opacity-30`}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
