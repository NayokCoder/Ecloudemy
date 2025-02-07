import React from "react";
import { motion } from "framer-motion";

import BannerImg from "../../public/assets/Hero_-_Main-min.webp";
import BannerImg1 from "../../public/assets/Hero_-_Left-min.webp";
import BannerImg2 from "../../public/assets/Hero_-_Right-min.webp";

const ImgHero = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
      <div className="max-w-[1440px] mx-auto relative">
        <img src={BannerImg} className="mx-auto" alt="" />
        <img src={BannerImg1} alt="" className="absolute top-55 left-25" />
        <img src={BannerImg2} alt="" className="absolute top-15 right-25" />
      </div>
    </motion.div>
  );
};

export default ImgHero;
