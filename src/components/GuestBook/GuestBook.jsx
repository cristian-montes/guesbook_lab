import { useState } from "react";

export default function GuestBook(){
    const [ name, setName] = useState('');
    const [guesEntry, setGuesEntry] = useState('');
    // const { entries, setEntries } = useEntries();
    // const { user, setUser } = useUser();

    return(
        <>
            <h1> Display message will go here</h1>
            <form>
                
            </form>
        </>
    )


}