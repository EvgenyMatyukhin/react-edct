import React, { createRef } from 'react';
import style from './newmessage.module.css'


const MyMessage = (props) => {

    let newMessage = React.createRef(); //1. создаем идентификатор для textarea
                                        // 2. Присваиваем идентификатор textarea через атрибут 'ref='**

    let addMessage = () => {
        props.addMessage();
    };

    let addNewMessage = () => {
        let text = newMessage.current.value; //забираем с помощью метода current содержимое (value) из textarea
        props.addNewMessage(text); //позволяет редактировать textarea из state
    };

    return <div className={style.content}>
        <div className={style.post}>
            <div className={style.new_post}> 
                <textarea ref={newMessage} onChange={addNewMessage}
                value={props.dialogs.newMessage} className={style.area} placeholder='Написать новое сообщение'></textarea>
                <div className={style.button1}> 
                    <button onClick={addMessage}>Отправить</button> {/* 4. С помощью атрибута 'onClick' создаем действие */}
                </div>
            </div>
        </div>
    </div>
};

export default MyMessage;