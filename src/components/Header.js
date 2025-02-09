import React from 'react';
import ProfileImg from '../images/ramesh.png';
import { FaMobileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Header = () => (

  <section>
    <div className="row justify-content-between align-items-top">

      <div className="col-md-4">
        <img src={ProfileImg} alt="avatar" className="rs-avatar" />
      </div>

      <div className="col-md-4">
        <div className="rs-green-text text-center font-weight-bold rs-pt-10 rs-profile-title">Technical Project Manager</div>
        <div className="rs-green-text text-center rs-pt-10">PMP | CSM | Javascript | React | Node | AWS</div>
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