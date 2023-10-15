import React from 'react';
import style from './post.module.css'

const Post = (props) => {
    return <div className={style.content}>
        <div className={style.post}>
            <div className={style.img}>
                <img src="natsu.png" alt="Аватар короля" />
            </div>
            <div className={style.text}>{props.massage}</div>
            <div className={style.like}>{`Лайки: ${props.like}`}</div>
            <button className={style.button}>Like</button>
        </div>
    </div>
};

export default Post;