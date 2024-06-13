import styles from './journey.module.css';
import { BsPerson } from "react-icons/bs";
// import styles from './Tag.module.css';
import Tags from '../TopTag/tag';
const Journey = () => {
    return (
        <div id="jr" className={styles.journey_body}>
            <div><Tags tagLogo={BsPerson} tagName="JOURNEY"/></div>
            {/* <div className={styles.top_tag}>
                <button className={styles.tag_btn}>
                <BsPerson className={styles.tag_logo}/>
                <span className={styles.tag_text}>JOURNEY</span>
                </button>
            </div> */}
            <div className={styles.jrny_heading}>
                {/* About My <span className={styles.journey}>Journey</span> */}
                <span className={styles.heading_text1}>About My <span className={styles.heading_text2}>Journey</span></span>
            </div>
            <div className={styles.j_msg}>
                <p className={styles.jrny_text}>In my first year of college, I discovered web development out of curiosity. Crafting web pages with HTML and CSS became a rewarding creative outlet. This passion led me to delve into JavaScript and advanced frameworks, shaping web development into both a hobby and a career aspiration, propelling my journey of continuous learning.</p>
            </div>
        </div>
    );
}

export default Journey;