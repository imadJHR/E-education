import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
      
      
     
      
      
      className="container py-24 md:py-28">
        <div className="flex flex-col justify-center ">
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto  ">
            <h1 className="text-4xl font-bold !leading-snug">
              450K+ Students are learning from us{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis quidem atque commodi labore porro illo, nulla beatae at
              perspiciatis optio, ipsa rerum, omnis harum qui!
            </p>
            <a
              href=""
              className="primary-btn !mt-8 inline-flex items-center gap-4 group "
            >
              Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200"/>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
