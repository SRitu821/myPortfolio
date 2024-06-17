
import styles from "./about.module.css";
import profilePic from "./image/Ritu.jpg";
import Logo from "./image/Logo.jpg";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const About = () => {
    return (
    <div className={styles.about}>
        <div className={styles.about_header}>
          <div>
            <img className={styles.logo} src={Logo} alt="logo"/>
          </div>
          <div>
            <span className={styles.designation}>
              Full Stack<br />Developer
            </span>
          </div> 
        </div>

        <img className={styles.img} src={profilePic} alt=''/>
        <h2 className={styles.email}>ritusinghmp213@gmail.com</h2>
        <h2 className={styles.college}>Poornima College of Engineering</h2>
        <p className={styles.Copyright}>© 2024 Ritu. All Rights Reserved</p>

        <div className={styles.about_socialMedia}>
          <a href="https://www.linkedin.com/in/ritu-singh-57129322a"><FaLinkedin className={styles.icon_logo} /></a>
          <a href="https://www.instagram.com/ritusingh2431/"><FaInstagram className={styles.icon_logo} /></a>
          <a href="https://github.com/SRitu821"><FaGithub className={styles.icon_logo} /></a>
        </div>

        <div className={styles.about_button}>
          <a href="mailto:ritusinghmp213@gmail.com.com" className={styles.btn}>
          <IoMdMail className={styles.hireIcon}/> HIRE ME!
          </a>
        </div>
      </div>
    );
}


export default About;