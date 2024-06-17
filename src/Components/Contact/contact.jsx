import styles from './contact.module.css';
import { MdMailOutline } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { useState } from "react";
import Tags from '../TopTag/tag';
const Contact = () => {

    const [Message, setMessage] = useState("");

    const handleSubmit = (e) => {
        console.log(Message);
    }

    const onChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div id="co" className={styles.body}>
            <div><Tags tagLogo={MdMailOutline} tagName="CONNECT"/></div>

            <div className={styles.headText}>
                <span className={styles.headText_W1}> Get in <span className={styles.headText_W2}> Touch </span></span>
            </div>
            
            <div className={styles.contact_input}>
                <div className={styles.input_1}>
                    <ul className={styles.ul_input}>
                        <p className={styles.fn}>Full Name <span className={styles.spanx}>*</span></p>
                        <input className={styles.inpt} type='text' name='' placeholder='Enter your Full Name' />
                    </ul>
                    <ul className={styles.ul_input}>
                        <p className={styles.fn}>Phone(optional)<span className={styles.spanx}>*</span></p>
                        <input className={styles.inpt} type='text' name='' placeholder='Enter Phone Number' />
                    </ul>
                    <ul className={styles.ul_input}>
                        <p className={styles.fn}>Message<span className={styles.spanx}>*</span></p>
                        <input value={Message} onChange={onChange} className={styles.inpt} type='text' name='' placeholder='Your  Message here...' />
                    </ul>
                </div>
                
                <div className={styles.input_2}>
                    <ul className={styles.ul_input}>
                        <p className={styles.fn}>E-mail<span className={styles.spanx}>*</span></p>
                        <input className={styles.inpt} type="text" name="" placeholder='Your Email Address' />
                    </ul>
                    <ul className={styles.ul_input}>
                        <p className={styles.fn}>Subject<span className={styles.spanx}>*</span></p>
                        <input className={styles.inpt} type="text" name="" placeholder='Select a Subject' />
                    </ul>
                </div>
            </div>
            <div className={styles.submitBtn}>
                <button onClick={handleSubmit} className={styles.send}>Send Message <BsEmojiSmile className={styles.emoji}/></button>
            </div>
        </div>
    )
}

export default Contact;