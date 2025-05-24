import { useRef } from "react";
import "./aboutMe.scss";
import { motion, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiMongodb } from "react-icons/si";

const variants = {
  initial: {
    x: -200,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function AboutMe() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="aboutme"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your website grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="Meeting" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>About</motion.b> Me
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Technical</motion.b>{" "}
            Skills
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="profile" variants={variants}>
        <div className="about">
          <p>
            Web developer with more than two years of experience in Frontend
            Development. As a winner of Career Development Scholarship Program
            organized by Technest and Code Academy, I have successfully
            completed “Advanced Frontend Development” program with Honour
            Diploma. During education, I have contributed to several projects,
            ranging from e-commerce to admin dashboard systems, where I gained
            extensive knowledge of Figma, GitHub, HTML5, CSS3, SASS, Bootstrap,
            Tailwind CSS, GSAP, JavaScript, jQuery, TypeScript, React, and Redux
            on the client side and MongoDB, Mongoose, Express, SQL, MySQL,
            PostgreSQL, Postman, NodeJS and PHP on the server side.
          </p>
        </div>

        <div className="skills">
          <div className="skills-data">
            <div className="skills-logo-name">
              <FaHtml5 className="react-icons html" />
              <span>HTML5</span>
            </div>
            <div className="skills-bar skills-html"></div>
            <div>
              <span className="skills-percentage">95%</span>
            </div>
          </div>
          <div className="skills-data">
            <div className="skills-logo-name">
              <FaCss3Alt className="react-icons css" />
              <span>CSS3</span>
            </div>
            <div className="skills-bar skills-css"></div>
            <div>
              <span className="skills-percentage">95%</span>
            </div>
          </div>
          <div className="skills-data">
            <div className="skills-logo-name">
              <FaSass className="react-icons sass" />
              <span>SASS / SCSS </span>
            </div>
            <div className="skills-bar skills-sass"></div>
            <div>
              <span className="skills-percentage">95%</span>
            </div>
          </div>
          <div className="skills-data">
            <div className="skills-logo-name">
              <RiTailwindCssFill className="react-icons tailwind" />
              <span>Tailwind CSS</span>
            </div>
            <div className="skills-bar skills-tailwind"></div>
            <div>
              <span className="skills-percentage">90%</span>
            </div>
          </div>
          <div className="skills-data">
            <div className="skills-logo-name">
              <IoLogoJavascript className="react-icons js" />
              <span>JavaScript</span>
            </div>
            <div className="skills-bar skills-js"></div>
            <div>
              <span className="skills-percentage">85%</span>
            </div>
          </div>
          <div className="skills-data">
            <div className="skills-logo-name">
              <BiLogoTypescript className="react-icons ts" />
              <span>TypeScript</span>
            </div>
            <div className="skills-bar skills-ts"></div>
            <div>
              <span className="skills-percentage">80%</span>
            </div>
          </div>
          <div className="skills-data">
            <div className="skills-logo-name">
              <FaReact className="react-icons react" />
              <span>React / Redux</span>
            </div>
            <div className="skills-bar skills-react"></div>
            <div>
              <span className="skills-percentage">80%</span>
            </div>
          </div>
          <div className="skills-data">
            <div className="skills-logo-name">
              <FaNodeJs className="react-icons node" />
              <span>Node JS</span>
            </div>
            <div className="skills-bar skills-node"></div>
            <div>
              <span className="skills-percentage">70%</span>
            </div>
          </div>
          <div className="skills-data">
            <div className="skills-logo-name">
              <SiExpress className="react-icons express" />
              <span>Express JS</span>
            </div>
            <div className="skills-bar skills-express"></div>
            <div>
              <span className="skills-percentage">75%</span>
            </div>
          </div>
          <div className="skills-data">
            <div className="skills-logo-name">
              <SiMongodb className="react-icons mongo" />
              <span>Mongo DB</span>
            </div>
            <div className="skills-bar skills-mongo"></div>
            <div>
              <span className="skills-percentage">90%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutMe;
