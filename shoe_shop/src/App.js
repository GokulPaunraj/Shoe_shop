import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import Lenis from 'lenis'
import './App.css';
import Carosal from './Components/Carosal/Carosal';
import Header from './Components/Header/Header';
import Shoe from './Components/Shoe/Shoe';
import Footer from './Components/Footer/Footer';
import nike1 from './assets/images/nike1.png';
import nike2 from './assets/images/nike2.png';
import nike3 from './assets/images/nike3.png';
import { useEffect, useState } from "react";

function App() {
  /*Lenis code for smooth scrolling
  const lenis = new Lenis()
  
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)
  //Lenis code for smooth scrolling */

  const [shoes, setshoes] = useState([]);

  
  return (
    <div className="App">
      <Header />
      <Carosal />
      <div id="one">
          <Shoe
            image={nike1}
            height={'500px'}
            width={'500px'}
            name={'Nike D.01'}
            category={'Sports Shoe'}
            description={'The company was founded on January 25, 1964, as "Blue Ribbon Sports", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971.'}
            price={'$777'}
          />
        </div>
        <div id="two">
          <Shoe
            image={nike2}
            height={'350px'}
            width={'350px'}
            name={'Nike D.01'}
            category={'Sports Shoe'}
            description={'The company was founded on January 25, 1964, as "Blue Ribbon Sports", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971.'}
            price={'$777'}
          />
        </div>
        <div id="three">
          <Shoe
            image={nike3}
            height={'400px'}
            width={'400px'}
            name={'Nike D.01'}
            category={'Sports Shoe'}
            description={'The company was founded on January 25, 1964, as "Blue Ribbon Sports", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971.'}
            price={'$777'}
          />
        </div>
      <Footer />
    </div>
  );
}

export default App;
