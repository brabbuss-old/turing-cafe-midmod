import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App/App";
import "@testing-library/jest-dom";
import {getReservationsData} from '../utilities/apiCalls'
jest.mock('../utilities/apiCalls')

describe('App', () => {
  
  it('should render correctly', async () => {
    getReservationsData.mockResolvedValue([{ name: 'Scott', date: '12/17', time: '7:30', number: 2, id: 2 }])
    
    render(
      <App />
    )
    
    // Form
    expect(screen.queryByText('Name')).toBeInTheDocument()
    expect(screen.queryByText('Date')).toBeInTheDocument()
    expect(screen.queryByText('Time')).toBeInTheDocument()
    expect(screen.queryByText('Guests')).toBeInTheDocument()
    expect(screen.queryByText('Make Reservation')).toBeInTheDocument()
    // Reservation
    await waitFor(() => expect(screen.queryByText('Scott')).toBeInTheDocument())
    expect(screen.queryByText('Date: 12/17')).toBeInTheDocument()
    expect(screen.queryByText('Time: 7:30')).toBeInTheDocument()
    expect(screen.queryByText('Diners: 2')).toBeInTheDocument()
    expect(screen.queryByText('Cancel Reservation')).toBeInTheDocument()
  }),

  it('should make a new reservation', async () => {
   
    render(
      <App />
    )
    
    // Form
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

    // Reservation
    await waitFor(() => expect(screen.queryByText('Scott')).toBeInTheDocument())
    expect(screen.queryByText('Date: 12/17')).toBeInTheDocument()
    expect(screen.queryByText('Time: 7:30')).toBeInTheDocument()
    expect(screen.queryByText('Diners: 2')).toBeInTheDocument()
    expect(screen.queryByText('Cancel Reservation')).toBeInTheDocument()
  })
})