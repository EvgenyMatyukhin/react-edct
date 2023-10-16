import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <Nav />
        <Routes className='app_wrapper_content'>
          <Route path="/profile" element={<Profile posts={props.posts}/>} />
          <Route path="/messages/*" element={<Dialogs users={props.users} messages={props.messages}/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
