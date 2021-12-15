import React from "react";

import {render, screen } from '@testing-library/react';
import App from './App';

test('renders form to enter name and signs', () => {
    render(<App />);

    const greeting = screen.getByText(/Guest Name/i);
    expect(greeting).toBeInTheDocument();

});