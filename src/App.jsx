import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <section id="Homepage"><Navbar /><Home /></section>
      <section id="About"><AboutMe /></section>
      <section id="Parallax"><Parallax /></section>
      <div id="Projects"></div>
      <Portfolio  />
      <section id="Contact"><Contact /></section>
    </div>
  )
}


export default App

