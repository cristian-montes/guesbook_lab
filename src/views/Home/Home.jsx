import React from "react";

import GuestBook from "../../components/GuestBook/GuestBook";
import { EntryProvider } from "../../context/EntryContext";

const Home = () => {
    return(
        <>
        <EntryProvider>
            <GuestBook />
            <h2> Entri list component </h2>
        </EntryProvider>
        </>
    )
}

export default Home;