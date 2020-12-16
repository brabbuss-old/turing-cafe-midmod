import React, { Component } from 'react';

class Form extends Component {
  state = { 
    name: '',
    date: '',
    time: '',
    number: 0
   }

  handleChange = (event) => {
    const input = event.target.name
    const value = event.target.value
    this.setState({[input]: value})
  }

  handleClick = e => {
    const {name, date, time, number} = this.state
    if (name && date && time && number) {
      const newReservation = {...this.state, id:Date.now()}
      this.setState({name: '', date: '', time: '', number: ''})
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
          pattern="[0-20]*"
          value={this.state.number}
          name='guests'
          onChange={this.handleChange}
        />
        <button
          role='button'
          onClick={this.handleClick}
        >Make Reservation</button>
      </div>
     );
  }
}
 
export default Form;