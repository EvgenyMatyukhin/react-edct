import React from 'react';
import style from './Dialogs.module.css';
import User from './User';
import Message from './Message';
import MyMessage from './newmessage/newmessage';

const Dialogs = (props) => {

    let users = props.dialogs.users.map(u => <User name={u.name} id={u.id} />);
    let messages = props.dialogs.messages.map(m => <Message message={m.message} />);

    return (
        <div>
            <div className={style.title}>Сообщения</div>
            <div className={style.dialogs}>
                <div className={style.dialogs_items}>
                    {users}
                </div>
                <div className={style.dialogs_messages}>
                    {messages}
                    <MyMessage dispatch={props.dispatch} dialogs={props.dialogs}/>
                </div>
            </div>
            
        </div>
    );

};

export default Dialogs;