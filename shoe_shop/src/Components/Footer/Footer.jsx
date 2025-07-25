import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {

  useEffect(()=>{
    let footer = document.querySelector(".footer")
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline({
          scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });

        tl.fromTo(footer, { opacity:0 }, { opacity:1 }, 0);

  },[])

  return (
    <footer className="footer">
        <img src={logo} alt="" height={80} width={200}></img>
        <div className="socials">
          <p style={{ opacity: "50%" }}>Follow</p>
          <ul>
            <li>
              <a href="#footer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#footer">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="#footer">
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a href="#footer">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="about">
          <p style={{ opacity: "50%" }}>About</p>
          <ul>
            <li>
              <a href="#footer">History</a>
            </li>
            <li>
              <a href="#footer">Career</a>
            </li>
            <li>
              <a href="#footer">Achievements</a>
            </li>
          </ul>
        </div>
        <div className="products">
          <p style={{ opacity: "50%" }}>Products</p>
          <ul>
            <li>
              <a href="#footer">Sports Shoes</a>
            </li>
            <li>
              <a href="#footer">Casual Shoes</a>
            </li>
            <li>
              <a href="#footer">Canvas Shoes</a>
            </li>
          </ul>
        </div>
    </footer>
  );
};

export default Footer;
