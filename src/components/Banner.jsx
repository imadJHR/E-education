/* eslint-disable react/no-unescaped-entities */
import { FadeUp } from "./Hero";
import { motion } from "framer-motion";
import { BiBookReader } from "react-icons/bi";
import { MdAccessTime } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

const Banner = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/*banner image */}
        <div className="flex justify-center items-center ">
          <img
            src="https://img.freepik.com/vecteurs-libre/cours-mathematiques-ligne-departement-universitaire-economie-cours-internet-cours-comptabilite-archives-numeriques-manuels-comptabilite-mathematiques_335657-3270.jpg?t=st=1722523649~exp=1722527249~hmac=71d17c2798078bdd08112bfee847b85602c79a03338b0132e453d263ff2b8152&w=740"
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover "
          />
        </div>

        {/*banner text  */}
        <div className="flex flex-col justify-center ">
          <div className=" text-center md:text-left space-y-12">
            <motion.h1
              variants={FadeUp(0.2)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate="animate"
              transition={{duration : 0.5}}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              The World's Leading Online Learning Platform
            </motion.h1>
            <div className="flex  flex-col gap-6">
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                animate="animate"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <BiBookReader />
                <p className="text-lg">10,000+ Courses</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                animate="animate"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <GrUserExpert />
                <p className="text-lg">Expert Instruction</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.8)}
                initial="initial"
                animate="animate"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <MdAccessTime />
                <p className="text-lg">LifeTime Access</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
