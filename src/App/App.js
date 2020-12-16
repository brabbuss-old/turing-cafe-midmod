import React, { Component } from 'react';
import './App.css';
import ResContainer from '../components/ResContainer'
import Form from '../components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ResContainer />
        </div>
      </div>
    )
  }
}

export default App;
