import styles from './skills.module.css';
import SkillBox from "./skills_box";
import { TbIcons } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";

import { TbBrandVscode } from "react-icons/tb";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiLogoGit } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import Tags from '../TopTag/tag';

const Skills = () => {
    return (
        <div id="sk" className={styles.body}>
                <div><Tags tagLogo={TbIcons} tagName="SKILLS"/></div>

            <div className={styles.headText}>
                <span className={styles.headText1_W1}> My <span className={styles.headText1_W2}> Advantages </span></span>
            </div>
            <div className={styles.skillText}>Web Development</div>

            <div className={styles.sk1_content}>
                <SkillBox logo = {FaHtml5} name = "HTML" />
                <SkillBox logo = {IoLogoCss3} name= "CSS" />
                <SkillBox logo = {IoLogoJavascript} name= "Javascript" />
                <SkillBox logo = {FaReact} name= "REACT" />
                <SkillBox logo = {BiLogoJquery} name= "jQuery" />
            </div>
            <div className={styles.skillText}>Software Packages</div>
            <div className={styles.sk1_content}>
                <SkillBox logo = {TbBrandVscode} name= "VS Code" />
                <SkillBox logo = {BsFillBootstrapFill} name= "Bootstrap" />
                <SkillBox logo = {FaGithub} name= "GitHub" />
                <SkillBox logo = {BiLogoGit} name= "Git" />
                <SkillBox logo = {FaNodeJs } name= "NodeJs" />
            </div>
        </div>
    )
}
export default Skills;