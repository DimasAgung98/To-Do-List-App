import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="mt-5">
            <div className="container px-4 px-lg-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <ul className="list-icon text-center">
                            <li className="list-icon-item mx-2">
                                <a href="https://www.linkedin.com/in/dimasagungw98/">
                                    <span className="fa-stack fa-lg">
                                        <FaLinkedin size={50} color="white" />
                                    </span>
                                </a>
                            </li>
                            <li className="list-icon-item">
                                <a href="https://github.com/DimasAgung98">
                                    <span className="fa-stack fa-lg">
                                        <FaGithub size={50} color="white" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className="small text-center text-white fst-italic">Copyright &copy; Dimas Agung 2022</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer