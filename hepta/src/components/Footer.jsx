import React from 'react'

function Footer() {
    return (
        <>
            <div className='container-fluid footercf'>
                <br /><br /><br />
                <div className='row frow'>
                    <div className='col-sm-3'>
                        <h2 className="ql">Quick Link</h2>
                        <a href="#" style={{ textDecoration: "none" }}>
                            <p className="qlt">About Us</p>
                        </a>
                        <a href="#" style={{ textDecoration: "none" }}>
                            <p className="qlt">Terms & Conditions</p>
                        </a>
                        <a href="#" style={{ textDecoration: "none" }}>
                            <p className="qlt">Privacy Policy</p>
                        </a>
                        <a href="#" style={{ textDecoration: "none" }}>
                            <p className="qlt">Help</p>
                        </a>
                        <a href="#" style={{ textDecoration: "none" }}>
                            <p className="qlt">Rooms</p>
                        </a>
                    </div>

                    <div className='col-sm-3'>
                        <h2 className="ql">Support</h2>
                        <a href="#" style={{ textDecoration: "none" }}>
                            <p className="qlt">Our Location</p>
                        </a>
                        <a href="#" style={{ textDecoration: "none" }}>
                            <p className="qlt">The Hosts</p>
                        </a>
                        <a href="#" style={{ textDecoration: "none" }}>
                            <p className="qlt">About</p>
                        </a>
                        <a href="#" style={{ textDecoration: "none" }}>
                            <p className="qlt">Contact</p>
                        </a>
                        <a href="#" style={{ textDecoration: "none" }}>
                            <p className="qlt">Restaurant</p>
                        </a>

                    </div>
                    <div className='col-sm-3'>
                        <h2 className="ql">Contact Info</h2>
                        <p className="qlt1">Address:</p>
                        <p className="qlt2">98 West 21th Street, Suite 721 New York NY 10016</p>
                        <p className="qlt1">Phone:</p>
                        <p className="qlt2">(+1) 435 3533</p>
                        <p className="qlt1">Email:</p>
                        <p className="qlt2">info@yourdomain.com</p>

                    </div>
                    <div className='col-sm-3'>
                        <h2 className="ql">Subscribe</h2>
                        <p className="qlt2" style={{ fontSize: "20px" }}>Sign up for our newsletter</p>
                        <br />
                        <input type="email" id="email" name="email" placeholder="Your email..." />
                        <a href="index.html" style={{ textDecoration: "none" }}><i className="fa-solid fa-arrow-pointer" />
                        </a>

                    </div>
                </div>
                     <br /><br />
                    <hr className="hrl" />
                    <br /><br /><br />
                    <p className="fcpr">Copyright © 2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i>  by <a href="index.html" className="fcl">Colorlib</a></p>
                    <br />
                        <div className="icons">
                            <i className="fa-brands fa-facebook-f"></i><i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i><i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>

            </div>

                </>
                )
}

                export default Footer