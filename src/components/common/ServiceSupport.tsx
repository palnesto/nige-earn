import { FaPhone } from "react-icons/fa6";
const ServiceSupport = () => {
  return (
    <section className="text-lg md:text-[25px] font-bold flex flex-col items-center py-14 px-3 md:py-28 gap-y-5 text-center">
      <h2 className="text-[#1D4DFF]">Get in touch</h2>
      <h1 className="text-[#252B42] text-4xl md:text-7xl">
        Service And Support
      </h1>
      <p className="text-[#737373] font-normal max-w-6xl">
        All services and advanced maintenance will be done at Smart Rotamach Pvt
        Ltd - 501401 and at upcoming dealer locations.
      </p>
      <a
        href="https://wa.me/919650912448"
        target="_blank"
        className="flex gap-5 items-center pt-5"
      >
        <FaPhone /> +91 8897600171
      </a>

      <figure className="md:w-xl">
        <img
          src="/assets/herodrone.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </figure>
    </section>
  );
};

export default ServiceSupport;
