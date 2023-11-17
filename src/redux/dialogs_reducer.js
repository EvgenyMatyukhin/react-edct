const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

let initialState = {
    users: [
        { id: 1, name: 'Иван' },
        { id: 2, name: 'Мария' },
        { id: 3, name: 'Олег' },
        { id: 4, name: 'Анна' },
        { id: 5, name: 'Константин' },
        { id: 6, name: 'Семен' },
        { id: 6, name: 'Варвара' }],

    messages: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как дела' },
        { id: 3, message: 'Пошли гулять' }],

    newMessage: ''
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let userMessage = {
                id: 4,
                message: state.newMessage,
            };
            state.messages.push(userMessage);
            state.newMessage = '';
            return state;
        }
        case ADD_NEW_MESSAGE: {
            state.newMessage = action.newMessage;
            return state;
        }
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const addNewMessageActionCreator = (text) => ({ type: ADD_NEW_MESSAGE, newMessage: text });
export default dialogReducer;