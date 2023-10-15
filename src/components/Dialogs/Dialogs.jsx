import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div>
            <div className={style.title}>Сообщения</div>
            <div className={style.dialogs}>
                <div className={style.dialogs_items}>
                    <div className={style.item}>
                        <img src='logo512.png'></img>
                        <a>Иван</a>
                    </div>
                    <div className={style.item}>
                        <img src='logo512.png'></img>
                        <a>Сергей</a>
                    </div>
                    <div className={style.item}>
                        <img src='logo512.png'></img>
                        <a>Николай</a>
                    </div>
                    <div className={style.item}>
                        <img src='logo512.png'></img>
                        <a>Роман</a>
                    </div>
                    <div className={style.item}>
                        <img src='logo512.png'></img>
                        <a>Марина</a>
                    </div>
                    <div className={style.item}>
                        <img src='logo512.png'></img>
                        <a>Илья</a>
                    </div>
                </div>
                <div className={style.dialogs_massages}>
                    <div className={style.massege}>Привет</div>
                    <div className={style.massege}>Как Дела</div>
                    <div className={style.massege}>Как сам?</div>
                    <div className={style.massege}>Пошли за мясом</div>
                </div>

            </div>
        </div>
    );

};

export default Dialogs;