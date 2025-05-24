import SideBar from "../SideBar/SideBar";
import "./navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
    return (
        <div className='navbar'>
        <SideBar />
        <div className="wrapper">
          <motion.span initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{ delay: 4.7, duration: 0.5 }}>Portfolio</motion.span>
          <div className="social">
              <a href="https://www.linkedin.com/in/fuad-babayev-b8a649199/" target="_blank" rel="noreferrer"><img src="/linkedIn.png" alt="linkedIn" /></a>
              <a href="https://github.com/FuadBabayev" target="_blank" rel="noreferrer"><img src="/github.png" alt="github" /></a>
              <a href="https://www.instagram.com/babaef_fuad/?next=%2F" target="_blank" rel="noreferrer"><img src="/instagram.png" alt="instagram" /></a>
              <a href="https://www.facebook.com/fuad.babayev.5201/" target="_blank" rel="noreferrer"><img src="/facebook.svg" alt="facebook" /></a>
          </div>
        </div>
      </div>
    )
}

export default Navbar
