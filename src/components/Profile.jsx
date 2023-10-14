import React from 'react';
import style from './css/Profile.module.css'

const Profile = () => {
    return <div className={style.content}>
        {/* <div>
            <img src='wallpaper.jpg'></img>
        </div> */}
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
        <div className={style.post}>
            <div>
                Пост 1
            </div>
            <div>
                Пост 2
            </div>
            <div>
                Пост 3
            </div>
        </div>
    </div>
};

export default Profile;