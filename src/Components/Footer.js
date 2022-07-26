import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import './Assets/Images/CSS/Footer.css'

export default function Footer() {
    return (
        <>
            {/* <hr /> */}
            <div className="tejas-container">
                <h3>InfoXpression</h3>
                <div className="contents">
                    <div className="contents_1">
                        <a href='/'>Home</a>
                        <a href='/'>About Us</a>
                        <a href='/'>Sponsers</a>
                        <a href='/'>Glimpses</a>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Privacy Policy</a>
                    </div>
                    <div className="contents_2">
                        <h4>Stay In Touch</h4>
                        <ul>
                            <li><a href='/' className='icons'><FaInstagram /></a></li>
                            <li><a href='/' className='icons'><FaFacebook /></a></li>
                            <li><a href='/' className='icons'><FaTwitter /></a></li>
                            <li><a href='/' className='icons'><FaLinkedin /></a></li>
                        </ul>
                    </div>
                    <div className="contents_3">
                        <h5>&#169;InfoXpression USICT. All Rights Reserved</h5>
                    </div>
                </div>
            </div>
        </>
    )

}