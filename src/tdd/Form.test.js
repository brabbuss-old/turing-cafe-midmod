import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form";
import "@testing-library/jest-dom";

describe('Form', () => {
  it('should render correctly', () => {
    render(
      <Form />
    )

    expect(screen.queryByText('Name')).toBeInTheDocument()
    expect(screen.queryByText('Date')).toBeInTheDocument()
    expect(screen.queryByText('Time')).toBeInTheDocument()
    expect(screen.queryByText('Guests')).toBeInTheDocument()
    expect(screen.queryByText('Make Reservation')).toBeInTheDocument()
  }),

  it('should call function with params ', () => {
    const mockAddReservation = jest.fn()
    const mockReservation = { name: 'Scott', date: '12/17', time: '7:30', number: '2', id: 2 }

    render(
      <Form addReservation={mockAddReservation}/>
    )

    const nameInput = screen.getByPlaceholderText('Name')
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)')
    const timeInput = screen.getByPlaceholderText('Time')
    const guestsInput = screen.getByPlaceholderText('Number of Guests')
    const submitButton = screen.queryByRole('button', { name: /make reservation/i })

    userEvent.type(nameInput, 'Scott')
    userEvent.type(dateInput, '12/17')
    userEvent.type(timeInput, '7:30')
    userEvent.type(guestsInput, '2')
    userEvent.click(submitButton)
    expect(mockAddReservation).toHaveBeenCalled()
    expect(mockAddReservation).toHaveBeenCalledWith(mockReservation)
  })
})
