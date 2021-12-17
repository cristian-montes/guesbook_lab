import React from "react";

import { render, screen } from '@testing-library/react';
import GuestBook from './GuestBook';
import { EntryProvider } from "../../context/EntryContext";
import { UserProvider } from "../../context/UserContext";

it('should render the gesrbook', ()=>{
    const { container } = render(
    <UserProvider>
        <EntryProvider>
            < GuestBook />
        </EntryProvider>
    </UserProvider>
    );

    expect(container).toMatchSnapshot();
});
