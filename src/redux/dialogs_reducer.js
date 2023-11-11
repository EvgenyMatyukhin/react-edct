const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

const dialogReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE:{
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
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const addNewMessageActionCreator = (text) => ({type: ADD_NEW_MESSAGE, newMessage: text});
export default dialogReducer;