import Button from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleContinueWithX = () => {
    // Here you would typically handle X authentication
    // For now, we'll just navigate to the home page
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 to-teal-900 flex flex-col items-center relative overflow-hidden">
      {/* Logo Section with Background */}
      <div className="flex-1 w-full flex flex-col items-center pt-12 relative">
        <div className="relative mb-4">
          <img
            src="/background1.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="flex flex-col items-center gap-2">
            <img src="/eagle.png" alt="NigeCoin" className="w-24 h-24" />
            <span className="text-xl font-bold text-white">NigeCoin</span>
          </div>
        </div>

        <div className="relative mb-8">
          <img
            src="/hero.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="text-center">
            <img src="/rewards.png" alt="Rewards" className="w-64 mb-2" />
            <h2 className="text-2xl font-bold text-lime-400 uppercase">
              PLATFORM
            </h2>
          </div>
        </div>
      </div>

      {/* Black Bottom Section */}
      <div className="w-full bg-black bg-opacity-80 rounded-t-[2.5rem] px-6 py-12">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3 text-center">
            Sign in for rewards
          </h2>
          <p className="text-center text-white opacity-80 mb-8">
            Complete Tasks and earn Rewards from Nigecoin Platform
          </p>

          <Button
            variant="secondary"
            fullWidth
            className="mb-4 flex items-center justify-center gap-2"
            onClick={handleContinueWithX}
          >
            Continue with{" "}
            <img src="/twitter.png" alt="twitter" className="w-4 h-4" />
          </Button>

          <div className="text-white text-center mt-4">
            Already have an account?{" "}
            <button
              onClick={handleContinueWithX}
              className="text-lime-400 font-medium"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
