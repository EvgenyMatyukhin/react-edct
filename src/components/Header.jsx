import React from 'react';
import style from './css/Header.module.css';

const Header = () => {
    return <header className={style.header}>
        <div className={style.name}>
            My Cocial
        </div>
        <div className={style.surname}>
            Network
        </div>
        <img className={style.img} src='logo.png'></img>
    </header>
};

export default Header;