import React from 'react';
import MyPost from './Myposts/mypost';
import style from './Profile.module.css'
import User from './ProfileUser/ProfileUser';

const Profile = (props) => {
    return <div className={style.content}>
        {/* <div>
            <img src='wallpaper.jpg'></img>
        </div> */}
        <User/>
        <MyPost posts={props.posts}/>
    </div>
};

export default Profile;