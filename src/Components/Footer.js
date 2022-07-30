import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import './Assets/Images/CSS/Footer.css'
export default function Footer() {
    return (
        <>
            <div className="container_2">
                <div className="title">InfoXpression</div>
                <div className="contents">
                    <div className="contents_1">
                        <a href='/'>GGSIPU</a>
                        <a href='/'>Medium</a>
                        <a href='/'>About</a>
                        <a href='/'>Clubs</a>
                    </div>
                    <div className="contents_2">
                        <h3 className='myh3'>Stay In Touch</h3>
                        <ul>
                            <li><a href='/' className='icons'><FaInstagram /></a></li>
                            <li><a href='/' className='icons'><FaFacebook /></a></li>
                            <li><a href='/' className='icons'><FaTwitter /></a></li>
                            <li><a href='/' className='icons'><FaLinkedin /></a></li>
                        </ul>
                    </div>
                    <div className="contents_3">
                        <h5 className='myh5'>&#169;InfoXpression USICT. All Rights Reserved</h5>
                    </div>
                </div>
            </div>
        </>
    )

}