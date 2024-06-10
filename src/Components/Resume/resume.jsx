import styles from './resume.module.css';
import RsmBox from './RsmBox';
import { IoNewspaperOutline } from "react-icons/io5";

const Resume = () => {
    return (
        <div className={styles.resume_body}>
            <div className={styles.res_btn}>
                <IoNewspaperOutline className={styles.tag_icon}/>
                <span className={styles.tag_text}>RESUME</span>
            </div>
            <div className={styles.res_heading}>
                Education & <span className={styles.head_text2}>Experience</span>
            </div>
            
        </div>
    );
}
export default Resume;