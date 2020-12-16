import React, { Component } from 'react';

class Form extends Component {
  state = { 
    name: '',
    date: '',
    time: '',
    guests: 0
   }

  handleChange = (event) => {
    const input = event.target.name
    const value = event.target.value
    this.setState({[input]: value})
  }

  handleClick = e => {
    e.preventDefault();
    const {name, date, time, guests} = this.state
    if (name && date && time && guests) {
      const newReservation = {...this.state, id:Date.now()}
      this.setState({name: '', date: '', time: '', guests: ''})
      this.props.addReservation(newReservation)
    }

  }

  render() { 
    return ( 
      <div className='form'>
        <label>Name</label>
        <input
          placeholder='Name'
          type='text'
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
        />
        <label>Date</label>
        <input
          placeholder='Date (mm/dd)'
          type='text'
          value={this.state.date}
          name='date'
          onChange={this.handleChange}
        />
        <label>Time</label>
        <input
          placeholder='Time'
          type='text'
          value={this.state.time}
          name='time'
          onChange={this.handleChange}
        />
        <label>Guests</label>
        <input
          placeholder='Number of Guests'
          type='text'
          pattern="[0-9]*"
          value={this.state.guests}
          name='guests'
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleClick}
        >Make Reservation</button>
      </div>
     );
  }
}
 
export default Form;