import {useLayoutEffect} from 'react'
import './Carosal.css';
import nike1 from '../../assets/images/nike1.png';
import nike2 from '../../assets/images/nike2.png';
import nike3 from '../../assets/images/nike3.png';

const Carosal = ()=>{
    let sliders = document.querySelectorAll('.slider')
    let carosal = document.querySelector('.carosal')
    let dots = document.querySelectorAll('.dot');
    let active = 0;
    let lastElement = sliders.length-1;
    
    const showSlider = async ()=>{
      let activeSlide = await carosal.querySelector('.activeSlider')
      if(activeSlide){
        activeSlide.classList.remove('activeSlider')
      }
      sliders[active].classList.add('activeSlider');
      let activeDot = await carosal.querySelector('.active')
      if(activeDot){
        activeDot.classList.remove('active')
      }
      dots[active].classList.add('active');
      let position = await document.querySelector('.indicator .position')
      position.innerHTML = '0'+(active+1);
    }
    useLayoutEffect(()=>{
      showSlider();
    })    

    const handleNextBtn = ()=>{
        if(active< lastElement){
          active +=1;
        }
        else{
          active=0;
        }
        //document.documentElement.style.setProperty("--direction",1);
        showSlider();
    }
    const handlePreBtn = ()=>{
        if(active > 0){
          active -=1;
        }
        else{
          active=lastElement;
        }
        //document.documentElement.style.setProperty("--direction",-1);
        showSlider();
    }
    const handleDot = (position)=>{
          active = position-1;
          showSlider()
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
            <div className='rightArrow' onClick={()=>handleNextBtn()}><div className='arrow' onClick={()=>handleNextBtn()}><p>&gt;</p></div></div>

         </section>
    )
}

export default Carosal