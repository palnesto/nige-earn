import { Button } from "@/components/ui/Button";

const LoginPage = () => {
  const handleContinueWithX = () => {
    const BACKEND = import.meta.env.VITE_BACKEND_URL; // e.g. http://localhost:4000

    // Build the URL to your back-end's /auth/start endpoint, carrying
    // a dynamic returnTo of wherever this front-end is running.
    const returnTo = window.location.origin; // e.g. http://localhost:5173
    window.location.href = `${BACKEND}/auth/start/earn?returnTo=${encodeURIComponent(
      returnTo
    )}`;
  };

  return (
    <div className="min-h-screen bg-[#00857F] flex flex-col items-center relative overflow-hidden">
      {/* Logo Section with Background */}
      <div className="flex-1 w-full flex flex-col items-center justify-between pt-12 relative">
        <div className="relative pb-4">
          {/* <img
            src="/bg1.png"
            alt=""
            className="absolute inset-0 w-full h-full "
          /> */}
          <div className="flex flex-col items-center gap-2">
            <img src="/eagle.png" alt="NigeCoin" className="w-24" />
            <span className="text-2xl font-bold text-white">NigeCoin</span>
          </div>
        </div>

        <div className="relative">
          <img
            src="/bg2.png"
            alt=""
            className="absolute object-contain md:hidden"
          />
          <div className="flex flex-col items-center pb-4">
            <img src="/rewards.png" alt="Rewards" className="w-64" />
            <img src="/Platform.png" alt="Platform" className="w-52 -mt-4" />
          </div>
        </div>
      </div>

      {/* Black Bottom Section */}
      <div className="w-full flex items-center justify-center relative">
        <div className="bg-gradient-to-b from-[#206562 ] via-[#00857F] to-transparent absolute z-10 w-full h-32 top-0" />
        <img
          src="/bg2.png"
          alt="NigeCoin"
          className="w-full h-full absolute object-cover object-center lg:object-fill lg:object-top hidden md:block"
        />
        <div className="w-full md:w-96 bg-black rounded-t-[2.5rem] px-6 py-8 z-10 flex flex-col items-center ">
          <h2 className="text-2xl font-bold text-white mb-3 text-center">
            Sign in for rewards
          </h2>
          <p className="text-center text-white opacity-80 mb-8">
            Complete Tasks and earn Rewards from Nigecoin Platform
          </p>

          <Button
            variant="yellow"
            className="mb-4 gap-2 w-96 md:w-full"
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
