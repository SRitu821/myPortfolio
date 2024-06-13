import styles from './skills_box.module.css'

const SkillBox = (props) => {
    return (
        <div className={styles.Skl_box_body}>
            <div className={styles.box_logo}><props.logo className={styles.bx_logo}/></div>
            <span className={styles.box_name}>{props.name}</span>
        </div>
    )
}

export default SkillBox;