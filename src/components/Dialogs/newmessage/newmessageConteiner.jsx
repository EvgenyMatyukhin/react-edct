import React, { createRef } from 'react';
import { addMessageActionCreator, addNewMessageActionCreator } from '../../../redux/dialogs_reducer';



const MyMessageContainer = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let addNewMessage = (text) => {
         //забираем с помощью метода current содержимое (value) из textarea
        props.dispatch(addNewMessageActionCreator(text)); //позволяет редактировать textarea из state
    };

    return <MyMessage addMessage={addMessage} addNewMessage={addNewMessage}/>
};

export default MyMessageContainer;