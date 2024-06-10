import styles from './skills_box.module.css'
// import {GoHome} from "react-icons/go";
const SkillBox = (props) => {
    return (
        <div className={styles.Skl_box_body}>
            <div className={styles.box_log}><props.logo className={styles.bx_logo}/></div>
            <span className={styles.box_name}>{props.name}</span>
        </div>
    )
}

export default SkillBox;