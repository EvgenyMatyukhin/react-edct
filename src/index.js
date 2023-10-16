import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let users = [{ id: 1, name: 'Иван' },
    { id: 2, name: 'Мария' },
    { id: 3, name: 'Олег' },
    { id: 4, name: 'Анна' },
    { id: 5, name: 'Константин' },
    { id: 6, name: 'Семен' },
    { id: 6, name: 'Варвара' },
    { id: 7, name: 'Jhon' },
    { id: 8, name: 'Shara Conor' }];

let messages = [{ id: 1, name: 'Привет' },
    { id: 2, name: 'Как дела' },
    { id: 3, name: 'Пошли гулять' },
    { id: 4, name: 'It worked' },
    { id: 4, name: 'Hi, Shara' }];

let posts = [{ id: 1, name: 'Первый пост', like: '12' },
                { id: 2, name: 'Второй пост', like: '8' },
                { id: 3, name: 'Пошла жара!!!', like: '355' },
                { id: 3, name: 'Работает MAP!', like: '355' },
                { id: 4, name: 'Рropses done', like: '1000' },
                { id: 5, name: 'Valid names added', like: '1000' }]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App users={users} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
