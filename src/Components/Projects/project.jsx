import styles from './project.module.css';
import { HiOutlineViewGrid } from "react-icons/hi";
// import "../TopTag/tag.css";
import Tags from '../TopTag/tag';
// import styles from './tag.module.css';
const Project = () => {
    return (
        <div id="pr" className={styles.project_body}>
            <div>< Tags tagLogo={HiOutlineViewGrid} tagName ="PROJECTS" /></div>

            <div className={styles.proj_heading}>
                <span className={styles.heading_text1}>My <span className={styles.heading_text2}>Projects</span></span>
            </div>
        </div>
    );
}
export default Project;