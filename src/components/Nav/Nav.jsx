import React from 'react';
import style from'./Nav.module.css'

const Nav = () => {
    return <nav className={style.nav}>
        <ul>
            <li><a href="">Профиль</a></li>
            <li><a href="">Сообщения</a></li>
            <li><a href="">Новости</a></li>
            <li><a href="">Музыка</a></li>
            <li><a href="">Настройки</a></li>
        </ul>
    </nav>
};

export default Nav;