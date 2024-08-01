import { TbWorldWww } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { RiEmotionHappyLine } from "react-icons/ri";
import { IoMdPulse } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { motion } from "framer-motion";

const ServiceData = [
  {
    id: 1,
    title: "Web Development",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Mobile Development",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Software  Development",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Statisfed Clients ",
    link: "#",
    icon: <RiEmotionHappyLine />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "SEO Optimization ",
    link: "#",
    icon: <IoMdPulse />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 Support ",
    link: "#",
    icon: <MdOutlineSupportAgent />,
    delay: 0.7,
  },
];
const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration : 0.3,
        delay: delay,
        ease : "easeInOut"
      }
        
    }
  };
};

const Service = () => {
  return (
    <section>
      <div className="container pb-14 pt-16 ">
        <h1 className="text-4xl font-bold text-left pb-10 ">
          Services we provide
        </h1>
        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-6 gap-8 ">
          {ServiceData.map((service) => (
            // eslint-disable-next-line react/jsx-key
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl   "
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="font-semibold text-md text-center px-3 ">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;