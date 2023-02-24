import React from "react";
import styles from './header.module.css'
import phoneIcon from './phoneIcon.svg'
import logoSite from './logoSite.svg'
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.headerWrap}>
                <img src={logoSite}></img>
                <ul className={styles.listItem}>
                    
                    
                    <li> <NavLink to='#'> Маршруты </NavLink> </li>
                    <li> <NavLink to='#'> Галерея </NavLink> </li>
                    <li> <NavLink to='#'> Вопрос-Ответ </NavLink> </li>
                    <li className={styles.itemActive}> <a href='#'> Забранировать </a> </li>
                
                
                </ul>
                <div className={styles.elem}>
                    <div className={styles.connectionWrap}>
                        <img src={phoneIcon}></img>
                        <a href='#'>+7 928 333 26 45</a>
                    </div>
                    <button className={styles.btn}>Перезвоните мне</button>
                </div>
            </div>
        </div>
    )
}

export default Header;