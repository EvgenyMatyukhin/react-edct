import React from 'react';
import { NavLink, UNSAFE_useScrollRestoration } from 'react-router-dom';
import style from'./Nav.module.css'

const Nav = () => {
    return ( <nav className={style.nav}>
        <ul>
            <li><NavLink to="/profile" className = { navData => navData.isActive ? style.active : undefined }>Профиль</NavLink></li>
            <li><NavLink to="/massages" className={ navData => navData.isActive ? style.active : undefined }>Сообщения</NavLink></li>
            <li><NavLink to="/news" className={ navData => navData.isActive ? style.active : undefined }>Новости</NavLink></li>
            <li><NavLink to="/music" className={ navData => navData.isActive ? style.active : undefined }>Музыка</NavLink></li>
            <li><NavLink to="/settings" className={ navData => navData.isActive ? style.active : undefined }>Настройки</NavLink></li>
        </ul>
    </nav>);
};

export default Nav;