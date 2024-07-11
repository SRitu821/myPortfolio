import styles from './RsmBox.module.css';

const RsmBox = (props) => {
    return(
        <div className={styles.box_body}>
            <span className={styles.duration}> {props.duration } </span>
            <span className={styles.role}> {props.role } </span>
            <span className={styles.at}> {props.at } </span>
            <span className={styles.role}> {props.role2 } </span>
            <span className={styles.at}> {props.at2 } </span>
        </div>
    );
}

export default RsmBox;