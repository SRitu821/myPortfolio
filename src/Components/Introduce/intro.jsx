import styles from './intro.module.css';
import { IoHomeOutline } from "react-icons/io5";

const Introduction = () => {
    return(
        <div className={styles.introBody}>
            <div className={styles.tag_btn}>
                <IoHomeOutline className={styles.tag_icon}/>
                <span className={styles.tag_heading}>INTRODUCE</span>
            </div>
            <div className={styles.Myself}>
                <span className={styles.text}>
                    Hello from <span className={styles.textName}>Ritu</span>,
                </span>
                <span className={styles.text}>
                    <br/> 
                    Full Stack Web
                </span>
                <span className={styles.text}>
                    <br/> 
                    Developer
                </span>
            </div>
            <div className={styles.IntroCaption}>
                <p className={styles.caption_text}>I am an enthusiastic web developer, devoted to crafting exceptional digital experiences.</p>
            </div>
        </div>
    );
}

export default Introduction;