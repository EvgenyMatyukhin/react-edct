import React from 'react';
import style from './ProfileUser.module.css'

const User = () => {
    return <div className={style.content}>
            <div className={style.avatar}>
            <div>
                <img src='natsu.png'></img>
            </div>
            <div>
                <div className={style.name}>
                    Евгений М.
                </div>
                <ul>
                    <li>Дата рождения: 13 октября</li>
                    <li>Город: Нижний Новгород</li>
                    <li>Образование: "Синергия"</li>
                    <li>Site: kappry.ru</li>
                </ul>
            </div>
        </div>
        
    </div>
};

export default User;