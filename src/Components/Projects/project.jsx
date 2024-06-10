import styles from './project.module.css';
import { HiOutlineViewGrid } from "react-icons/hi";

const Project = () => {
    return (
        <div className={styles.project_body}>
            <div className={styles.proj_btn}>
                <HiOutlineViewGrid  className={styles.tag_icon}/>
                <span className={styles.tag_text}>PROJECTS</span>
            </div>
            <div className={styles.proj_heading}>
                My<span className={styles.proj_text2}> Projects</span>
            </div>
        </div>
    );
}
export default Project;