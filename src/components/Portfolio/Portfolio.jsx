import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 10,
    title: "Hertz",
    img: "/hertz.png",
    desc: 'Drive Your Journey with Confidence',
    href: "https://hertz.org.az/az",
  },
  {
    id: 11,
    title: "PH Contracting",
    img: "/ph.jpg",
    desc: 'Built on Trust, Driven by Quality',
    href: "https://phcontracting.ae/",
  },
  {
    id: 12,
    title: "Yaşıl Bağlar",
    img: "/gardens.jpg",
    desc: 'Whether you’re a seasoned gardener or just getting your hands dirty, we provide the tools, tips, and inspiration to bring your green space to life',
    href: "https://yasilbaglar.az/",
  },
  {
    id: 13,
    title: "Flo App",
    img: "/floapp.jpg",
    desc: 'Your One-Stop Online Shop',
    href: "https://flocake.netlify.app/",
  },
  {
    id: 14,
    title: "Flocake",
    img: "/flocake.jpg",
    desc: 'Fresh Flowers, Handpicked with Love',
    href: "https://www.flocake.com/",
  },
  {
    id: 15,
    title: "Turkish HoReCa",
    img: "/horeca.jpg",
    desc: 'From timeless recipes to modern creations, we bring flavor, culture, and joy to your table',
    href: "https://turkishhoreca.com.ua/",
  },
  {
    id: 16,
    title: "Digah Group",
    img: "/digah.jpg",
    desc: 'With 24/7 access, top-tier security, and various unit sizes, storing your belongings has never been easier',
    href: "https://digahqrup.az/",
  },
  {
    id: 17,
    title: "Spektrx",
    img: "/catridge.jpg",
    desc: 'Your Trusted Cartridge Solution',
    href: "https://www.spektrx.az/",
  },
  {
    id: 18,
    title: "Boyaluna",
    img: "/boyaluna.jpg",
    desc: 'Welcome to "Boyaluna" – Where Beauty Begins',
    href: "https://boyaluna.com/",
  },
  {
    id: 19,
    title: "Bizcon",
    img: "/bizcon.jpg",
    desc: 'Welcome to "Bizcon" Audit Services – delivering transparent, accurate, and reliable auditing solutions for businesses of all sizes',
    href: "https://bizcon.az/",
  },
  {
    id: 20,
    title: "ACS",
    img: "/acs.jpg",
    desc: '"Alüminium Cəbhə Sistemləri" is your trusted partner in transforming balconies into elegant, safe, and weatherproof spaces',
    href: "https://www.acs.az/",
  },
  {
    id: 21,
    title: "Kurikulum",
    img: "/kurikulum.jpg",
    desc: 'We offer expertly designed courses that empower learners at every level',
    href: "https://kurikulum.az/",
  },
  {
    id: 22,
    title: "GentShop",
    img: "/gentshop.png",
    desc: "MERN Stack Ecommerce Project. It does also have Admin Dashboard",
    href: "https://gentshop-fuadbabayev.netlify.app/",
  },
  {
    id: 23,
    title: "Wanderer",
    img: "/wanderer.png",
    desc: "It is Touristic Website and you can visit or book World's Best Places",
    href: "https://wanderer-fuad.netlify.app/",
  },
  {
    id: 24,
    title: "Grilli",
    img: "/grilli.png",
    desc: "Restaurant Advertisement. You can look through Menu and order whatever you want",
    href: "https://grilli-amazing-food.netlify.app/",
  },
  {
    id: 25,
    title: "Fashion Anon",
    img: "/fashionanon.png",
    desc: "Ecommerce Project especially for well-groomed and attractive Women",
    href: "https://fashion-ecommerce-anon.netlify.app/",
  },
  {
    id: 26,
    title: "Barber",
    img: "/barber.png",
    desc: "Hair Cutting Styles. Espically for Men who want's try different styles",
    href: "https://barber-hair-cutting.netlify.app/",
  },
  {
    id: 27,
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
        <h1>Real Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
