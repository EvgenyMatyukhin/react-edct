import React from 'react';
import { addNewPostActionCreator, postChangeActionCreator } from '../../../redux/profile_reducer';
import style from './mypost.module.css'
import Post from './Post/post';

const MyPost = (props) => {

    let posts = props.posts.map ( p => <Post massage={p.post} like={p.like}/>); // В структуру костанты Post вкладывам 
                                                                                //содержимое из props

    let newPost = React.createRef(); //Переменная, которая дает идентификатор для textarea

    let addNewPost = () => {
        props.dispatch(addNewPostActionCreator());
    };

    let postChange = () => {
        let text = newPost.current.value; //забираем с помощью метода current содержимое (value) из textarea
        props.dispatch(postChangeActionCreator(text)); //позволяет редактировать textarea из state
    };

    return <div className={style.content}>
        <div className={style.post}>
            <p>Болталка</p>
            <div className={style.new_post}>
                <textarea ref={newPost} onChange={postChange}
                    value={props.newPost} className={style.area} placeholder='Введите новый пост'/>
                <div className={style.button1}>
                    <button onClick={addNewPost}>Опубликовать</button>
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