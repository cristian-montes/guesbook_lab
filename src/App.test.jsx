import React from "react";
import {render, screen } from '@testing-library/react';
import App from './App';
import { UserProvider } from "./context/UserContext";

test('renders form to enter name and signs', () => {
    render(
    <UserProvider>
        <App />
    </UserProvider>
    );
    const greeting = screen.getByText(/Sign In My Friend/i);
    expect(greeting).toBeInTheDocument();

});