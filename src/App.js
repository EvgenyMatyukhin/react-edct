import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <List/>
    </div>
  );
}

const Header = () => {
  return (
    <div className="App">
      <div>Какая то новая функция</div>
     </div>
  );
}

const List = () => {
  return (
    <div className="App">
        <ul>
          <li>Проверка связи мать его за ногу</li>
          <li>Проверка связи мать его за ногу</li>
          <li>Проверка связи мать его за ногу</li>
        </ul>
      </div>
  );
}


export default App;
