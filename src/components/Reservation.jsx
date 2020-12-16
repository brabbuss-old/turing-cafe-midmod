import React from "react";
import '../index.css'

const Reservation = props => {
  const { name, date, time, number } = props.reservation;

  return (
    <section className='reso-card'>
      <h1>Guest: {name}</h1>
      <h3>Date: {date}</h3>
      <h3>Time: {time}</h3>
      <h3>Diners: {number}</h3>
      <button>Cancel Reservation</button>
    </section>
  );
};

export default Reservation;
