import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage';
import CurrentPage from './CurrentPage/CurrentPage';
import Header from './Components/Header';

class App extends Component {
  render(){
    return(
      <div className="app">
        <Header />
        <Route path='/' exact component={MainPage}/>
        <Route path='/current/:id' exact component={CurrentPage} />
      </div>
    );
  }
}
export default App;
