import React from "react";
import { render, screen } from "@testing-library/react";
import Reservation from "../components/Reservation";
import "@testing-library/jest-dom";

describe('Reservation', () => {
  it('should render correctly', () => {
    const mockReservation = { name: 'Scott', date: '12/17', time: '7:30', number: 2, id: 2 }

    render(
      <Reservation key={mockReservation.id} reservation={mockReservation}/>
    )

    expect(screen.queryByText('Scott')).toBeInTheDocument()
    expect(screen.queryByText('Date: 12/17')).toBeInTheDocument()
    expect(screen.queryByText('Time: 7:30')).toBeInTheDocument()
    expect(screen.queryByText('Diners: 2')).toBeInTheDocument()
    expect(screen.queryByText('Cancel Reservation')).toBeInTheDocument()
  })
})