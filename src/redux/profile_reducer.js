const ADD_POST = 'ADD-POST';
const ADD_NEW_POST = 'ADD-NEW-POST';

const profileReducer =(state, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPost,
                like: 0
            };   // !!!!! Названия полей должны соответсвовать названиям ключей в массиве !!!!!
            state.posts.push(newPost); // Добавляем новый эллемент в конец массива posts в компаненте state
            state.newPost = ''; // обнуляем textarea после публикации поста.
            return state;
        }
        case ADD_NEW_POST: {
            state.newPost = action.newText; //присваиваем textarea символы из ввода
            return state;
        }
        default:
            return state;
    }
}
export const addNewPostActionCreator = () => ({type: ADD_POST});
export const postChangeActionCreator = (text) => ({type: ADD_NEW_POST, newText: text});
export default profileReducer;