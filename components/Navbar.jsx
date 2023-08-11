'use client';

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    // py-8 is a Tailwind class name, which looks like .py-8 {padding-top: 2rem
    // padding-bottom: 2rem}  Basically, instead of needing to design a selector
    // in a .css file and assign a classname to a div with which to apply the style
    // to, you can just include a little codeword that corresponds to the styling
    // you want to add.  You can look up all these codes on tailwinds website.
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg" alt="search"
        className="w-[24px] h-[24px] object-contain" />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          METAVERSUS
        </h2>
        <img src="/menu.svg" alt="menu"
          className="w-[24px] h-[24px] object-contain"
        />
    </div>
  </motion.nav>
);

export default Navbar;
