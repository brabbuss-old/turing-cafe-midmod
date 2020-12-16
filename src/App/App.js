import React, { Component } from 'react';
import './App.css';
import ResContainer from '../components/ResContainer'
import Form from '../components/Form'
// import {getReservationsData} from '../utilities/apiCalls'

class App extends Component {
  
  state = {
    reservations: []
  }

  componentDidMount = async () => {
    const response = await fetch ("http://localhost:3001/api/v1/reservations")
    .then((response) => response.json())
    this.setState({reservations: response})
    // const reservations = await getReservationsData()
    // .then(reservations => this.setState({reservations.reservations}));
    // .then(reservations => console.log(reservations));
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ResContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
