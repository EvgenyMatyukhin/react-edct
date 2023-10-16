import React from 'react';
import MyPost from './Myposts/mypost';
import style from './Profile.module.css'
import User from './ProfileUser/ProfileUser';

const Profile = () => {
    return <div className={style.content}>
        {/* <div>
            <img src='wallpaper.jpg'></img>
        </div> */}
        <User/>
        <MyPost/>
    </div>
};

export default Profile;