import { useState } from "react";
import { useUser } from "../../context/UserContext";

export default function GuestBook(){
    const [ name, setName] = useState('');
    const [guesEntry, setGuesEntry] = useState('');
    // const { entries, setEntries } = useEntries();
    const { user, setUser } = useUser();

    return(
        <>
            <h1> Display message will go here</h1>
            <form>
                <div>
                    <label> Guess Entry </label>
                    <textarea />
                </div>
                <div>
                    <button>
                        Sign
                    </button>
                    { "user goes here" && (
                        <button
                            type= "button"
                            // onClick={ () => {
                            //     setUser('')
                            //     setName('')
                            // }}
                        >
                         Not {user} ?
                        </button>
                    )}
                </div>
            </form>
        </>
    )


}