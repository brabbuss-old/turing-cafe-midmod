import React from 'react';
import Reservation from './Reservation'

const ResContainer = (props) => {
  return ( 
    <React.Fragment>
      {props.reservations.map(reservation => (
        <Reservation key={reservation.id} reservation={reservation}/>
      ))}
    </React.Fragment>
   );
}
 
export default ResContainer;