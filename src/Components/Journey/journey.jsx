import styles from './journey.module.css';
import { BsPerson } from "react-icons/bs";
const Journey = () => {
    return (
        <div className={styles.journey_body}>
            <div className={styles.j_head}>
                <div className={styles.tag_btn}>
                <BsPerson className={styles.tag_icon}/>
                <span className={styles.tag_heading}>JOURNEY</span>
                </div>
            </div>
            <div className={styles.heading}>
                About My <span className={styles.journey}>Journey</span>
            </div>
            <div className={styles.j_msg}>
                <p>In my first year of college, I discovered web development out of curiosity. Crafting web pages with HTML and CSS became a rewarding creative outlet. This passion led me to delve into JavaScript and advanced frameworks, shaping web development into both a hobby and a career aspiration, propelling my journey of continuous learning.</p>
            </div>
        </div>
    );
}

export default Journey;