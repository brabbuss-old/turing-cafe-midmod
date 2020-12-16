import React, { Component } from "react";
import "./App.css";
import ResContainer from "../components/ResContainer";
import Form from "../components/Form";
import {getReservationsData} from '../utilities/apiCalls'

class App extends Component {
  state = {
    reservations: [],
  };

  componentDidMount = async () => {
    getReservationsData().then((response) => this.setState({ reservations: response }))
  };

  addReservation = reservation => {
    this.setState({ reservations: [reservation, ...this.state.reservations] });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form addReservation={this.addReservation}/>
        </div>
        <div className="reso-container">
          <ResContainer reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
