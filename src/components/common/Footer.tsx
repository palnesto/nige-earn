import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative min-h-[60vh] lg:min-h-[83vh] md:h-0 xl:h-auto max-h-[83vh] overflow-hidden">
      <div  className="w-[100vw] mb-96 relative">
      <video
        className="w-full object-contain object-bottom scale-[3.5] translate-y-[90%] md:scale-[2] md:translate-y-[14%] lg:scale-150 lg:-translate-y-[4%]"
        autoPlay loop muted playsInline
      >
        <source src="/assets/footer.mp4" type="video/mp4" />
      </video>

      <section className="absolute inset-0 flex flex-col items-center text-center text-white z-10 pt-52 md:pt-28 lg:pt-20 xl:pt-32">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold mb-4 max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl">
          Grow Smarter, Not Harder.
        </h1>
        <p className="lg:text-xl 2xl:text-3xl max-w-4xl lg:max-w-3xl 2xl:max-w-7xl">
          Discover innovative tools and technologies that simplify farming while
          maximizing yields.
        </p>
        <div className="text-lg 2xl:text-xl flex gap-7 py-10 2xl:py-16">
          <span className="bg-[#1D4DFF] rounded-full p-4">
            <FaFacebookF />
          </span>
          <span className="bg-[#1D4DFF] rounded-full p-4">
            <FaLinkedin />
          </span>
          <span className="bg-[#1D4DFF] rounded-full p-4">
            <FaTwitter />
          </span>
          <span className="bg-[#1D4DFF] rounded-full p-4">
            <FaYoutube />
          </span>
        </div>
        <a href="https://palnesto.com/" target="_blank" rel="noopener noreferrer" className="w-32 xl:w-60 2xl:w-44">
          <img src="/assets/Designed by palnesto mobile.svg" alt="" className="w-full " />
        </a>
      </section>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-800 opacity-70" />
    </footer>
  );
};

export default Footer;
