import React from 'react';
import style from './mypost.module.css'
import Post from './Post/post';

const MyPost = (props) => {

    let posts = props.posts.map ( p => <Post massage={p.name} like={p.like}/>);

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
            {posts}
        </div>
    </div>
};

export default MyPost;