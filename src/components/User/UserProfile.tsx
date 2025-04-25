interface UserProfileProps {
  name: string;
  coinBalance: number;
  // profileImage: string;
  notifications?: number;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  coinBalance,
  // profileImage,
  notifications = 0,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <div>
          <p className="text-gray-500 text-sm">Hello,</p>
          <h1 className="text-xl font-bold text-gray-800">{name}</h1>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          <span className=" ">{coinBalance}</span>
          <img src="/nigecoin.gif" alt="Coin" className="w-16" />
        </div>

        {/* <div className="relative">
          <img
            src={profileImage}
            alt={name}
            className="w-8 h-8 rounded-full object-cover"
          />
        </div> */}

        <div className="relative">
          <img src="/Bell.png" className=" " />
          {notifications > 0 && (
            <span className="absolute -top-1 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {notifications > 9 ? "9+" : notifications}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
