import {useEffect, useState} from 'react'
import { gsap } from "gsap";
import './Carosal.css';
import nike1 from '../../assets/images/nike1.png';
import nike2 from '../../assets/images/nike2.png';
import nike3 from '../../assets/images/nike3.png';

const Carosal = ()=>{

    let [lastElement,setlastElement] = useState(0)
    let [active,setactive] = useState(0);
    
    useEffect(()=>{
      let sliders = document.querySelectorAll('.slider')
      let dots = document.querySelectorAll('.dot');
      let activeSlide = document.querySelector('.activeSlider')
      let activeDot = document.querySelector('.active')
      let position = document.querySelector('.position')

      setlastElement(sliders.length-1);

      if(activeSlide){
        activeSlide.classList.remove('activeSlider')
      }
      sliders[active].classList.add('activeSlider');
      if(activeDot){
        activeDot.classList.remove('active')
      }
      dots[active].classList.add('active');
      position.innerHTML = '0'+(active+1);

      let tl = gsap.timeline();
      let image = sliders[active].querySelector(".imgContainer");
      let content = sliders[active].querySelector(".sliderContent");
      tl.fromTo(image, { x: -200,  opacity:0 }, { x: 0,  opacity:1 }, 0);
      tl.fromTo(content, { x: 200,  opacity:0 }, { x: 0,  opacity:1 }, 0);

    },[active])    

    const handleNextBtn = ()=>{
        let activeSlide = document.querySelector('.activeSlider')
        let ptl = gsap.timeline();
        let pImage = activeSlide.querySelector(".imgContainer");
        let pContent = activeSlide.querySelector(".sliderContent");
        ptl.fromTo(pImage, { x: 0, opacity:1 }, { x: -200, opacity:0 }, 0);
        ptl.fromTo(pContent, 
                    { x: 0, opacity:1 }, 
                    { x: 200, opacity:0, onComplete : ()=>{
                        if(active< lastElement){
                          setactive(active+1);
                        }
                        else{
                          setactive(0);
                        }
                      }
                    }, 0);
    }
    const handlePreBtn = ()=>{
        if(active > 0){
          setactive(active-1);
        }
        else{
          setactive(lastElement);
        }
    }
    const handleDot = (position)=>{
          setactive(position-1);
    }
    return (
        <section className='carosal'>
            <div className='leftArrow'><div className='arrow' onClick={()=>handlePreBtn()}><p>&lt;</p></div></div>
            <div className='indicator'>
              <div className='position'>01</div>
              <div className='dots'>
                <div className='dot active' onClick={()=>handleDot(1)}></div>
                <div className='dot' onClick={()=>handleDot(2)}></div>
                <div className='dot' onClick={()=>handleDot(3)}></div>
              </div>
            </div>
            <div className='slider activeSlider' >
              <div className='imgContainer'><img src={nike1} alt=""></img></div>
              <div className='sliderContent'>
                <div className="category">Casual Shoe</div>
                <h1 className="name">NIKE D.01</h1>
                <div className="description">Style at your foot tip.Style at your foot tip.</div>
                <div className='buttons'>
                  <button>Buy Now</button>
                  <button><a href="#three">See More</a></button>
                </div>
              </div>
            </div>
            <div className='slider' >
              <div className='imgContainer'><img src={nike2} alt=""></img></div>
              <div className='sliderContent'>
                <div className="category">Casual Shoe</div>
                <h1 className="name">NIKE D.02</h1>
                <div className="description">Style at your foot tip.Style at your foot tip.</div>
                <div className='buttons'>
                  <button>Buy Now</button>
                  <button><a href="#three">See More</a></button>
                </div>
              </div>
            </div>
            <div className='slider' >
              <div className='imgContainer'><img src={nike3} alt=""></img></div>
              <div className='sliderContent'>
                <div className="category">Casual Shoe</div>
                <h1 className="name">NIKE D.03</h1>
                <div className="description">Style at your foot tip.Style at your foot tip.</div>
                <div className='buttons'>
                  <button>Buy Now</button>
                  <button><a href="#three">See More</a></button>
                </div>
              </div>
            </div>
            <div className='rightArrow'><div className='arrow' onClick={()=>handleNextBtn()}><p>&gt;</p></div></div>

         </section>
    )
}

export default Carosal