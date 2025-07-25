import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Carosal from "./Components/Carosal/Carosal";
import Header from "./Components/Header/Header";
import Shoe from "./Components/Shoe/Shoe";
import Footer from "./Components/Footer/Footer";
import nike1 from "./assets/images/nike1.png";
import nike2 from "./assets/images/nike2.png";
import nike3 from "./assets/images/nike3.png";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let allShoes = document.querySelectorAll(".shoeSection");
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(() => {
      allShoes.forEach((shoe) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: shoe,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });
        let image = shoe.querySelector(".shoeImage");
        let content = shoe.querySelector(".content");
        tl.fromTo(image, { x: -200 }, { x: 0 }, 0);
        tl.fromTo(content, { x: 200 }, { x: 0 }, 0);
      });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Carosal />
      <Shoe
        image={nike1}
        height={"500px"}
        width={"500px"}
        name={"Nike D.01"}
        category={"Sports Shoe"}
        description={
          'The company was founded on January 25, 1964, as "Blue Ribbon Sports", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971.'
        }
        price={"$777"}
      />
      <Shoe
        image={nike2}
        height={"350px"}
        width={"350px"}
        name={"Nike D.01"}
        category={"Sports Shoe"}
        description={
          'The company was founded on January 25, 1964, as "Blue Ribbon Sports", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971.'
        }
        price={"$777"}
      />
      <Shoe
        image={nike3}
        height={"400px"}
        width={"400px"}
        name={"Nike D.01"}
        category={"Sports Shoe"}
        description={
          'The company was founded on January 25, 1964, as "Blue Ribbon Sports", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971.'
        }
        price={"$777"}
      />
      <Footer />
    </div>
  );
}

export default App;
