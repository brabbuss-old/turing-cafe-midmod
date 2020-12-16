import React from 'react';
import Reservation from './Reservation'
import '../index.css'

const ResContainer = (props) => {
  return ( 
    <div className='reso-overlay'>
      {props.reservations.map(reservation => (
        <Reservation key={reservation.id} reservation={reservation}/>
      ))}
    </div>
   );
}
 
export default ResContainer;