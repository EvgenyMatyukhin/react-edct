import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';


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

