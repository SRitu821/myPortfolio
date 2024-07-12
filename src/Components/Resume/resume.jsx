import styles from './resume.module.css';
import RsmBox from './RsmBox';
import { IoNewspaperOutline } from "react-icons/io5";
import Tags from '../TopTag/tag';

const Resume = () => {
    return (
        <div id="re" className={styles.resume_body}>
            <div><Tags tagLogo={IoNewspaperOutline} tagName = "RESUME" /></div>

            <div className={styles.res_heading}>
                <span className={styles.heading_text1}>Education & <span className={styles.heading_text2}>Experience</span></span>
            </div>
            <div className={styles.rsmBox_content}>
                <RsmBox duration="Sept 2022 - Mar 2023" role="Zircon Club Member" at="Zircon Club, Poornima College of Engineering"></RsmBox>
            </div>
            <div className={styles.rsmBox_content}>
                <RsmBox duration="July 20-Aug 5, 2022" role="Web Development Training" at="Poornima College of Engineering"></RsmBox>
            </div>
            <div className={styles.rsmBox_content}>
                <RsmBox duration="Aug 23 - Oct 8, 2023" role="Full Stack Development Training" at="DEVYUT Softech Pvt.Ltd "></RsmBox>
            </div>
            <div className={styles.rsmBox_content}>
                <RsmBox duration="2021 - present" role="Bachelor of Technology" at="Poornima College of Engineering"></RsmBox>
            </div>
            <a href="https://drive.google.com/file/d/1bCVemyfLfPUZK8W7PgPtvi07fz_Hbfc2/view?usp=drive_link" target="blank">
                    <button className={styles.rs_view}>View Resume</button>
            </a>
        </div>
    );
}
export default Resume;