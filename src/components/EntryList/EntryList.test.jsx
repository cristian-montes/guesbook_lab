import React from "react";
import { render, screen } from '@testing-library/react';
import EntryList from "./EntryList";
import { EntryProvider } from "../../context/EntryContext";

it('should display the list of entries', ()=> {
    const { container } = render(
    <EntryProvider>
        <EntryList />
    </EntryProvider> 
       )
    ;

    expect(container).toMatchSnapshot();
})
