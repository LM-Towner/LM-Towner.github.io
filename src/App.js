import React, { Component } from 'react';
import "./styles/App.css";
import MainSideBar from './Components/MainSideBar';
class App extends Component {
  render() {
    return (
      <div className='col-xs-12 col-sm-12 col-md-12'>
        <MainSideBar/>
      </div>
    );
  }
}

export default App;
