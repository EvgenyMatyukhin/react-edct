import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog';
import Message from './Message';

const Dialogs = (props) => {

    let users = props.users.map(u => <Dialog name={u.name} id={u.id} />);
    let messages = props.messages.map(m => <Message message={m.name} />);

    return (
        <div>
            <div className={style.title}>Сообщения</div>
            <div className={style.dialogs}>
                <div className={style.dialogs_items}>
                    {users}
                </div>
                <div className={style.dialogs_messages}>
                    {messages}
                </div>

            </div>
        </div>
    );

};

export default Dialogs;