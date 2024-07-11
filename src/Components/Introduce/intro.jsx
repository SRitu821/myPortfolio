import styles from './intro.module.css';
import { IoHomeOutline } from "react-icons/io5";
import Tags from '../TopTag/tag';

const Introduction = () => {
    return(
        <div id="intr" className={styles.introBody}>
            <div><Tags tagLogo = {IoHomeOutline} tagName="INTRODUCE"/></div>
            <div className={styles.Myself}>
                <span className={styles.head_text1}>Hello from <span className={styles.head_text2}>Ritu,</span><br/>Full Stack Web Developer</span>
            </div>
            <div className={styles.IntroCaption}>
                <p className={styles.caption_text}>I am an enthusiastic web developer, devoted to crafting exceptional digital experiences.</p>
            </div>
        </div>
    );
}

export default Introduction;