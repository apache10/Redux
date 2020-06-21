import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import BreadContainer from './components/BreadContainer';
import HooksBreadContainer from './components/HooksBreadContainer';
import MuffinContainer from './components/MuffinContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BreadContainer/>
        <HooksBreadContainer/>
        <MuffinContainer/>
        <ItemContainer bread/>
        <ItemContainer/>
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
