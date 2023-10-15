import React from 'react';
import style from './mypost.module.css'
import Post from './Post/post';

const MyPost = () => {
    return <div className={style.content}>
        <div className={style.post}>
            <p>Болталка</p>
            <div className={style.new_post}>
                <textarea className={style.area} placeholder='Опубликовать новый пост'></textarea>
                <div className={style.button1}>
                    <button>Опубликовать</button>
                </div>
                <div className={style.button2}>
                    <button>Очистить</button>
                </div>
            </div>
            <Post massage='Это первый пост.' like='12'/>
            <Post massage='Это второй пост.' like='8'/>
        </div>
    </div>
};

export default MyPost;