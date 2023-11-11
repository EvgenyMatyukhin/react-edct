import dialogReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

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
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogReducer(this._state.dialogs, action);
        this.renderEntire(this._state); 

    }
}

export default store; 

