import React from "react";
import { useUser } from "../../context/UserContext";

const Header = () => {
    const { user } = useUser();

    return(
        <header>
            { user ? (
                <p>
                    Signing Guestbook as <span>{user}</span>
                </p>
            ) : (
                <p> Sig In My Friend </p>
            )}
        </header>
    )
}

export default Header;