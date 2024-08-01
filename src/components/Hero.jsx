import { motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: delay,
        stiffness: 100,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center mx-auto lg:flex-row-reverse bg-whitelg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      <motion.div
        variants={FadeUp(0.3)}
        initial="initial"
        animate="animate"
        
        
      
      >
        <img
          src="https://img.freepik.com/vecteurs-libre/education-personnes-agees-couple-personnes-agees-regardant-cours-ligne-ordinateur-portable-obtenant-diplome-universitaire-webinaire-seminaire-internet_335657-3597.jpg?t=st=1722519068~exp=1722522668~hmac=abdd75493a32824f16df004ac44ea443b30838878a958b014889886f4c649947&w=740"
          alt=""
        />
      </motion.div>

      <div className="max-w-lg  bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-9 md:mt-44 lg:w-3/5 lg:-left-11 ">
        <div className="flex flex-col p-12 ml- md:px-16">
          <motion.h2 
          variants={FadeUp(0.6)}
          initial="initial"
          animate="animate"
          
          className="text-2xl font-medium uppercase text-primary lg:text-4xl">
            Winding Mountain Road
          </motion.h2>
          <motion.div
          variants={FadeUp(0.8)}
          initial="initial"
          animate="animate"

          
          >
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-block w-full rounded-lg text-center text-lg font-medium text-gray-100 bg-primary border-solid border-2 border-gray-600 py-4 px-10 hover:bg-secondary hover:shadow-md md:w-48"
            >
              Get Started
            </a>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
