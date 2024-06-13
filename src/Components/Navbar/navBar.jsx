import styles from './navBar.module.css';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { TbIcons } from "react-icons/tb";
import { BsGrid3X2Gap } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import {useEffect} from "react";

const Navbar = () => {

    useEffect(() => {
        
        const links = document.querySelectorAll('.logos');

        links.forEach(link  => {
            link.addEventListener('click',(e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if(targetSection) {
                    targetSection.scrollIntoView({
                        behavior:'smooth',
                        block:'start',
                        inline:'nearest',
                        duration:800
                    });
                }
            });
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', () => {});
            });
        };
        
    },[]);

    return (
        <div className={styles.sideBar}>
            <div className={styles.item}><a href='#intr' className={styles.logos}><AiOutlineHome className={styles.Slogo}/></a></div>
            <div className={styles.item}><a href='#jr' className={styles.logos}><BsPerson className={styles.Slogo}/></a></div>
            <div className={styles.item}><a href='#re' className={styles.logos}><AiOutlineFileText className={styles.Slogo}/></a></div>
            <div className={styles.item}><a href='#sk' className={styles.logos}><TbIcons className={styles.Slogo}/></a></div>
            <div className={styles.item}><a href='#pr' className={styles.logos}><BsGrid3X2Gap className={styles.Slogo}/></a></div>
            <div className={styles.item}><a href='#co' className={styles.logos}><FiMail className={styles.Slogo}/></a></div>
        </div>
    );
}

export default Navbar;