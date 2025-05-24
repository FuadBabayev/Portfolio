import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./loader.scss";

const Loader = () => {
  const loadingScreenRef = useRef(null);
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);

  useEffect(() => {
    const counter3 = counter3Ref.current;
    const counter2 = counter2Ref.current;
    const counter1 = counter1Ref.current;

    // Append digits to counter3
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = j;
        counter3.appendChild(div);
      }
    }
    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);

    const animate = (counter, duration, delay = 0) => {
      const numHeight = counter.querySelector(".num").clientHeight;
      const totalDistance =
        (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration,
        delay,
        ease: "power2.inOut",
      });
    };

    animate(counter3, 3);
    animate(counter2, 3);
    animate(counter1, 1.5, 2);

    gsap.to(".digit", {
      top: "-150px",
      stagger: { amount: 0.25 },
      delay: 3.5,
      duration: 1,
      ease: "power4.inOut",
    });

    // gsap.from(".loader-1", { width: 0, duration: 3, ease: "power2.inOut" });
    // gsap.from(".loader-2", {
    //   width: 0,
    //   delay: 1,
    //   duration: 3,
    //   ease: "power2.inOut",
    // });

    gsap.fromTo(
      ".loader-1",
      { width: 0 },
      {
        width: "200px",
        duration: 3,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      ".loader-2",
      { width: 0 },
      {
        width: "100px",
        delay: 1,
        duration: 3,
        ease: "power2.inOut",
      }
    );

    gsap.to(".loader", { background: "none", delay: 3, duration: 0.1 });
    gsap.to(".loader-1", { rotate: 90, y: -50, duration: 0.5, delay: 3 });
    gsap.to(".loader-2", { x: -75, y: 75, duration: 0.5 }, "<");
    gsap.to(".loader", {
      scale: 100,
      rotate: 180,
      delay: 4,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(".loader-1", {
      width: "500%",
      height: "500%",
      delay: 4,
      duration: 1,
    });
    gsap.to("#loading-screen", { display: "none", delay: 4 });
  }, []);

  return (
    <div id="loading-screen" ref={loadingScreenRef}>
      <div className="loader">
        <div className="loader-1 bar"></div>
        <div className="loader-2 bar"></div>
      </div>
      <div className="counter">
        <div className="counter-1 digit" ref={counter1Ref}>
          <div className="num">0</div>
          <div className="num num1offset1">1</div>
        </div>
        <div className="counter-2 digit" ref={counter2Ref}>
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
        <div className="counter-3 digit" ref={counter3Ref}>
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
