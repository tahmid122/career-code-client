import React from "react";
import { motion } from "motion/react";

import team1 from "../../assets/team/photo1.jpg";
import team2 from "../../assets/team/photo2.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex flex-col items-center justify-end">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team1}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500 shadow-2xl"
            alt=""
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            src={team2}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500 shadow-2xl"
            alt=""
          />
        </div>
        <div className="flex-1">
          {/* <motion.h1
            animate={{
              rotate: 360,
              transition: { duration: 2 },
              x: 200,
              y: -100,
            }}
            className="text-5xl font-bold"
          >
            Latest job for you
          </motion.h1> */}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 2 } }}
            className="text-5xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#0acd13", "#1440f4"],
                transition: { duration: 1, repeat: Infinity },
              }}
            >
              Jobs
            </motion.span>{" "}
            For You
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
