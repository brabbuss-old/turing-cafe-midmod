import React from ‘react’;
import { render, screen } from “@testing-library/react”;
import userEvent from “@testing-library/user-event”;
import Form from ‘./Form.js’;
import ‘@testing-library/jest-dom’

describe('Form', () => {
  it('should render correctly', () => {
    render(
      <Form />
    )
  }),

  it('should render correctly', () => {
    const mockAddReservation = jest.fn()
  })
})
