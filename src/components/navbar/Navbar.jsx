import "./navbar.scss";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
     
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          &copy;code by Bilal Ahmad

        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/bilal-ahmad-263a6a230/">
            <img  src="/linkedin.png" alt="" />
          </a> 
          <a href="https://profile.codingninjas.com/ed56b7bf-0d7d-4c26-b08c-bec594802dfa">
            <img  src="cn.jpg" alt="" />
          </a>          
        </div>

        <div id="res-div">
         <a href="/home/bilal/Desktop/animated-portfolio-completed/public/BilalCN.pdf" download>Download my resume</a>
         <a href="">Contact Me!!</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
