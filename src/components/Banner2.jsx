/* eslint-disable react/no-unescaped-entities */
import { FadeUp } from "./Hero";
import { motion } from "framer-motion";
import { BiBookReader } from "react-icons/bi";
import { MdAccessTime } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0  ">
        {/*banner text  */}
        <motion.div
        variants={FadeUp(0.2)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate="animate"
        transition={{duration : 0.5}}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}

        
        className="flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px] ">
            <h1 className="text-4xl font-bold !leading-snug ">
              join Our community To Start Your Journey
            </h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quam
              esse numquam sapiente sunt corporis nobis harum dicta? Blanditiis
              facere dolorum quas. Consequatur, necessitatibus assumenda.
            </p>

            <div>
              <a href="" className="primary-btn !mt-8 ">
                Join Now
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
        variants={FadeUp(0.4)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate="animate"
        transition={{duration : 0.5}}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        
        
        className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
          {/*banner image */}
          <div className="flex justify-center items-center ">
            <img
              src="https://img.freepik.com/vecteurs-libre/cours-mathematiques-ligne-departement-universitaire-economie-cours-internet-cours-comptabilite-archives-numeriques-manuels-comptabilite-mathematiques_335657-3270.jpg?t=st=1722523649~exp=1722527249~hmac=71d17c2798078bdd08112bfee847b85602c79a03338b0132e453d263ff2b8152&w=740"
              alt=""
              className="w-[350px] md:max-w-[450px] object-cover "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner2;
