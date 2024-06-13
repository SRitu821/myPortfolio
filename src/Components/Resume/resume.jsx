import styles from './resume.module.css';
// import RsmBox from './RsmBox';
import { IoNewspaperOutline } from "react-icons/io5";
import Tags from '../TopTag/tag';

const Resume = () => {
    return (
        <div id="re" className={styles.resume_body}>
            <div><Tags tagLogo={IoNewspaperOutline} tagName = "RESUME" /></div>
            {/* <div className={styles.res_btn}>
                <button className={styles.tag_btn}>
                    <IoNewspaperOutline className={styles.tag_icon}/>
                    <span className={styles.tag_text}>RESUME</span>
                </button>
            </div> */}
            <div className={styles.res_heading}>
                <span className={styles.heading_text1}>Education & <span className={styles.heading_text2}>Experience</span></span>
            </div>
            
        </div>
    );
}
export default Resume;