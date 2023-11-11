import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/state';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntire = (state) => { // оборачиваем отрисовку страницы в функцию, чтобы вызвать ее при изменении данных
  root.render(                  // и перерисовать страницу, чтобы изменения отобразились на странице.
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
;}

renderEntire(store.getState());

store.subscribe(renderEntire); // передаем renderEntire в state без экспорта и импорта через props

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
