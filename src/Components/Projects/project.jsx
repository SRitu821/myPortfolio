import styles from './project.module.css';
import { HiOutlineViewGrid } from "react-icons/hi";
import Tags from '../TopTag/tag';
import pjimg1 from "./pr_img/weatherApp.png"
import pjimg2 from "./pr_img/comicGenerator.png"
// import comicGenerator from "./pr_img/comicGenerator";

/* const trackButtonClick = (projectName) => {
    ReactGA.event({
      category: 'Projects',
      action: 'View Project Button Click',
      label: projectName,
    });
  }; */

const Project = () => {
    return (
        <div id="pr" className={styles.project_body}>
            <div>< Tags tagLogo={HiOutlineViewGrid} tagName ="PROJECTS" /></div>

            <div className={styles.proj_heading}>
                <span className={styles.heading_text1}>My <span className={styles.heading_text2}>Projects</span></span>
            </div>

            <div className={styles.pj_body}>
                <div className={styles.pj_abt}>
                    <div className={styles.pj_name}>Weather App</div>
                    <div className={styles.pj_dependencies}>HTML, CSS, JavaScript, React</div>
                    <a href="https://weather-app-sritu821s-projects.vercel.app/" target="blank" >
                        <button className={styles.pj_view}>View Project</button>
                    </a>
                </div>
                <img className={styles.pj_img} src={pjimg1} alt="img" />
            </div>
            <div className={styles.pj_body}>
            <img className={styles.pj_img} src={pjimg2} alt="img" />
                <div className={styles.pj_abt}>
                    <div className={styles.pj_name}>Comic Generator</div>
                    <div className={styles.pj_dependencies}>HTML, CSS, JavaScript, MEN Project</div>
                    <a href="https://comic-generator-sritu821s-projects.vercel.app/" target="blank" >
                        <button className={styles.pj_view}>View Project</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Project;