import React from 'react';
import ProfileImg from '../images/ramesh.png';
import { FaMobileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Header = () => (

  <section>
    <div className="row justify-content-between align-items-top">

      <div className="col-md-3">
        <img src={ProfileImg} alt="avatar" className="rs-avatar" />
      </div>

      <div className="col-md-5">
        <div className="rs-green-text text-center font-weight-bold rs-pt-10">Technical Project Manager<span className="rs-text-white"> | </span>React.js Developer</div>
        <div className="rs-green-text text-center">PMP<span className="rs-text-white"> | </span>CSM<span className="rs-text-white"> | </span>Javascript<span className="rs-text-white"> | </span>React<span className="rs-text-white"> | </span>Node<span className="rs-text-white"> | </span>AWS</div>
      </div>

      <div className="col-md-4">
        <ul className="list-unstyled rs-name">
          <li className="text-right">
            <span className="rs-blue-text">(+91) 9492877162 </span>
            <FaMobileAlt />
          </li>
          <li className="text-right">
            <span className="rs-blue-text">ramesh.meduri@gmail.com </span>
            <AiOutlineMail />
          </li>
          <li className="text-right">
            <span className="rs-blue-text">
              <a href="https://www.linkedin.com/in/rameshmeduri" target="blank">https://www.linkedin.com/in/rameshmeduri</a> </span>
            <FaLinkedin />
          </li>

          <li className="text-right">
            <span className="rs-blue-text">
              <a href="https://github.com/rameshmeduri" target="blank">https://github.com/rameshmeduri</a> </span>
            <FaGithub />
          </li>
        </ul>
        <div className="text-right rs-orange-text"><b>Ramesh Meduri</b></div>
      </div>
    </div>

  </section>
);

export default Header;