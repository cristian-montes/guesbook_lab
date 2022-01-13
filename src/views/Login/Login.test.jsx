import React from "react";
import { render } from "@testing-library/react";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { UserProvider } from "../../context/UserContext";
import { ProvideAuth } from "../../context/ProvideAuth";
import Login from "./Login";

it('should display the Login Form', ()=>{
    const history = createMemoryHistory();
    const {container} = render(
        <UserProvider>
            <ProvideAuth>
                <Router history={history}>
                    <Login />
                </Router>
            </ProvideAuth>
        </UserProvider>
    )
    expect(container).toMatchSnapshot();
})