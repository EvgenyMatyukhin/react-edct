const ADD_POST = 'ADD-POST';
const ADD_NEW_POST = 'ADD-NEW-POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_NEW_MESSAGE = 'AADD_NEW_MESSAGE';



let store = {
    renderEntire() {}, //обьявлем пустой метод, для вызова внизу

    _state: {
        dialogs: {
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
        },
    
        profile: {
            posts: [
            { id: 1, post: 'Первый пост', like: '12' },
            { id: 2, post: 'Второй пост', like: '8' },
            { id: 3, post: 'Пошла жара!!!', like: '355' }],
           
         newPost: ''
        }
            
    },

    getState() {
        return this._state; //возвращаем state из приватного состояния
    },

    subscribe(observer) { // - observer - получает через пропс фукцию из index.js 
        this.renderEntire = observer;             // и присваивает ее renderEntire(объявили наверху). 
    },                                            // Т.о. получаем функцию без цикличных ссылок.

    dispatch(action) {
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                post:this._state.profile.newPost,
                like: 0
            };   // !!!!! Названия полей должны соответсвовать названиям ключей в массиве !!!!!
            this._state.profile.posts.push(newPost); // Добавляем новый эллемент в конец массива posts в компаненте state
            this._state.profile.newPost = ''; // обнуляем textarea после публикации поста.
            this.renderEntire(this._state);
        } else if (action.type === ADD_NEW_POST) {
            this._state.profile.newPost = action.newText; //присваиваем textarea символы из ввода и
            this.renderEntire(this._state); // перерисовываем сайт
        } else if (action.type === ADD_MESSAGE){
            let userMessage = {
                id: 4,
                message: this._state.dialogs.newMessage,
            };   
            this._state.dialogs.messages.push(userMessage); 
            this._state.dialogs.newMessage = ''; 
            this.renderEntire(this._state);
        } else if (action.type === ADD_NEW_MESSAGE) {
            this._state.dialogs.newMessage = action.newMessage; 
            this.renderEntire(this._state); 
        }

    }
}

export const addNewPostActionCreator = () => ({type: ADD_POST});
export const postChangeActionCreator = (text) => ({type: ADD_NEW_POST, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const addNewMessageActionCreator = (text) => ({type: ADD_NEW_MESSAGE, newMessage: text});

export default store; 

