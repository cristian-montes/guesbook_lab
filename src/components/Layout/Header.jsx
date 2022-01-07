import React from "react";
import { useUser } from "../../context/UserContext";
// import { ProvideAuth } from '../../context/authContext'
// import { useAuth } from '../../hooks/useAuth'

const Header = () => {
    const {user} = useUser();

    return(
        <header>
            { user ? (
                <p>
                    Signing Guestbook as <span>{user}</span>
                </p>
            ) : (
                <p> Sign In My Friend </p>
            )}
        </header>
    )
}

export default Header;