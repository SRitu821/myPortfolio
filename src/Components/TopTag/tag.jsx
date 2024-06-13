import styles from "./tag.module.css";

const Tags = (props) => {
    return(
       <div className={styles.top_tag}>
        <button className={styles.tag_btn}>
            < props.tagLogo className={styles.tag_logo}/>
            <span className={styles.tag_text}>{props.tagName}</span>
        </button>
       </div>
    )
}

export default Tags;