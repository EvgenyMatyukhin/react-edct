import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog';
import Message from './Message';

const Dialogs = () => {
    return (
        <div>
         <div className={style.title}>Сообщения</div>
            <div className={style.dialogs}>
                <div className={style.dialogs_items}>
                    <Dialog name='Иван' id='1'/> 
                    <Dialog name='Сергей' id='2'/> 
                    <Dialog name='Николай' id='3'/> 
                    <Dialog name='Марина' id='4'/> 
                    <Dialog name='Илья' id='5'/> 
                </div>
                <div className={style.dialogs_messages}>
                    <Message message='Привет'/>
                    <Message message='Как дела'/>
                    <Message message='Пошли гулять'/>
                    <Message message='где ключи?'/>
                </div>

            </div>
        </div>
    );

};

export default Dialogs;