import React from "react";
import { useState } from "react";
import { useEntries } from "../../context/EntryContext";
import { useUser } from "../../context/UserContext";

export default function GuestBook(){
    const [ name, setName] = useState('');
    const [guestEntry, setGuestEntry] = useState('');
    const { entries, setEntries} = useEntries();
    const { user, setUser } = useUser('user');

    const updateGuestName = ()=>{
        if(!guestEntry) return

        setUser(name);
        setEntries([...entries, {name, message: guestEntry }])
        setGuestEntry('');
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updateGuestName()
    }


    const guestNameInput = (
        <div>
            <div>
                <label htmlFor="guestName">
                    Guest Name
                </label>
            </div>

            <div>
                <input 
                  id="guestName"
                  type="text"
                  placeholder="Guest Name"
                  value={name}
                  onChange= {(e)=> setName(e.target.value)}
                />
            </div>
        </div>
    )

    const boton = (
        <div>
            <button
                type= "button"
                onClick={ () => {
                    setUser('')
                    setName('')
                }}
            >
                Not {user} ?
            </button>
        </div>
    );

        const messageDisplay = user ? `Thanks for signing ${user}!` : `Please Sign the Guestbook!`;
    return(
        <>
            <h1> {messageDisplay} </h1>
            <form onSubmit={handleSubmit}>
                {user ? null : guestNameInput} 
                <div>

                    <div>
                        <label> Guess Entry </label>
                    </div>

                    <div>
                        <textarea
                        id="guestEntry"
                        value= {guestEntry}
                        placeholder="Your Entry"
                        onChange={(event) => setGuestEntry(event.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <button type="submit"> Sign </button>
                    {user ? boton : null}
                </div>
            </form>
        </>
    )


}