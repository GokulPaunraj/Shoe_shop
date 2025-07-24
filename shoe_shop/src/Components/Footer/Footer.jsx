import './Footer.css';
import logo from '../../assets/images/logo.png'
import { FaInstagram, FaYoutube,  FaFacebook  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = ()=>{
    return (
        <>
            <footer className='footer'>
                <div className='footerContent'>
                        <div className='brand'>
                            <h1>NIKE</h1>
                            <img src={logo} alt='' height={80} width={200}></img>
                        </div>
                        <div className='about'>
                            <p style={{opacity:'50%'}}>ABOUT</p>
                            <ul>
                                <li><a href='#footer'>History</a></li>
                                <li><a href='#footer'>Career</a></li>
                                <li><a href='#footer'>News</a></li>
                                <li><a href='#footer'>Achievements</a></li>
                            </ul>
                        </div>
                        <div className='about'>
                            <p style={{opacity:'50%'}}>Products</p>
                            <ul>
                                <li><a href='#footer'>Sports Shoes</a></li>
                                <li><a href='#footer'>Casual Shoes</a></li>
                                <li><a href='#footer'>Canvas Shoes</a></li>
                            </ul>
                        </div>
                        <div className='socials'>
                            <p style={{opacity:'50%'}}>Follow</p>
                            <ul>
                                <li><a href='#footer'><FaFacebook /></a></li>
                                <li><a href='#footer'><FaYoutube /></a></li>
                                <li><a href='#footer'><BsTwitterX /></a></li>
                                <li><a href='#footer'><FaInstagram /></a></li>
                            </ul>
                        </div>
                </div>
            </footer>
        </>
    )
}

export default Footer