import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let linkId = "/messages/" + props.id;
    return (
        <div className={style.item}>
            <img src='logo512.png'></img>
            <NavLink to={linkId}>{props.name}</NavLink>
        </div>
    )
};

export default Dialog;