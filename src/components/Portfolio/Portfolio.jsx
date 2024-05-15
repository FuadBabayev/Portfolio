import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "GentShop",
    img: "/gentshop.png",
    desc: "MERN Stack Ecommerce Project. It does also have Admin Dashboard",
    href: "https://gentshop-fuadbabayev.netlify.app/",
  },
  {
    id: 2,
    title: "Wanderer",
    img: "/wanderer.png",
    desc: "It is Touristic Website and you can visit or book World's Best Places",
    href: "https://wanderer-fuad.netlify.app/",
  },
  {
    id: 3,
    title: "Grilli",
    img: "/grilli.png",
    desc: "Restaurant Advertisement. You can look through Menu and order whatever you want",
    href: "https://grilli-amazing-food.netlify.app/",
  },
  {
    id: 4,
    title: "Fashion Anon",
    img: "/fashionanon.png",
    desc: "Ecommerce Project especially for well-groomed and attractive Women",
    href: "https://fashion-ecommerce-anon.netlify.app/",
  },
  {
    id: 5,
    title: "Barber",
    img: "/barber.png",
    desc: "Hair Cutting Styles. Espically for Men who want's try different styles",
    href: "https://barber-hair-cutting.netlify.app/",
  },
  {
    id: 6,
    title: "Unigine Squad",
    img: "/uniginesquad.png",
    desc: "You love Playing Video Games. This place for You. Here is different Games",
    href: "https://unigine-squad-epic-game.netlify.app/",
  },

];

function Single({ item }){
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href} target="_blank">See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio(){
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
