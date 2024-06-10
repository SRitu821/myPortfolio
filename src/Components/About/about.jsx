
import styles from "./about.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import profilePic from "./image/Ritu.jpg";
import Logo from "./image/Logo.jpg";
import { IoMdMail } from "react-icons/io";

const About = () => {
    return (
    <div className={styles.about}>
        <div className={styles.about_header}>
          <img className={styles.logo} src={Logo}/>
          <span className={styles.designation}>
            Full Stack<br />Developer
          </span>
        </div>

        <img className={styles.img} src={profilePic} alt=''/>
        <h2 className={styles.email}>ritusinghmp213@gmail.com</h2>
        <h2 className={styles.college}>Poornima College of Engineering</h2>
        <p className={styles.Copyright}>© 2024 Ritu. All Rights Reserved</p>

        <div className={styles.about_socialMedia}>
          <a href="https://www.linkedin.com/in/ritu-singh-57129322a"><FaLinkedin className={styles.icon_logo} /></a>
          <a href="https://www.instagram.com/ritusingh2431/"><FaInstagram className={styles.icon_logo} /></a>
          <a href="https://github.com/SRitu821"><FaGithub className={styles.icon_logo} />
</a>
        </div>

        <div className={styles.about_button}>
          <div>
          <IoMdMail className={styles.hireIcon}/>
          </div>
          <div>
            <button className={styles.hireMe}> Hire Me!</button>
          </div>
        </div>
      </div>
    );
}


export default About;