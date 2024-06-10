import styles from './contact.module.css';
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
    return (
        <div className={styles.body}>
            <div className={styles.contactBtn}>
                <MdMailOutline className={styles.btnIcon}/>
                <span className={styles.btnText}>Contact</span>
            </div>
            <div className={styles.headText}>
                <span className={styles.headText_W1}> Get in <span className={styles.headText_W2}> Touch </span></span>
            </div>
        </div>
    )
}

export default Contact;