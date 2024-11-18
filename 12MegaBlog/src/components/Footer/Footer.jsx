import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="">
    <div className="">
        <div className="">
            <div className="">
                <div className="">
                    <div className="">
                        <Logo width="100px" />
                    </div>
                    <div>
                        <p className="">
                            &copy; Copyright 2023. All Rights Reserved by DevUI.
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <h3 className="">
                        Company
                    </h3>
                    <ul>
                        <li className="">
                            <Link
                                className=""
                                to="/"
                            >
                                Features
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                className=" "
                                to="/"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                className=""
                                to="/"
                            >
                                Affiliate Program
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=""
                                to="/"
                            >
                                Press Kit
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">
                <div className="">
                    <h3 className="">
                        Support
                    </h3>
                    <ul>
                        <li className="">
                            <Link
                                className=" "
                                to="/"
                            >
                                Account
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=""
                                to="/"
                            >
                                Help
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                className=" "
                                to="/"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" "
                                to="/"
                            >
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">
                <div className="">
                    <h3 className="">
                        Legals
                    </h3>
                    <ul>
                        <li className="">
                            <Link
                                className=""
                                to="/"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                className=""
                                to="/"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=""
                                to="/"
                            >
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Footer