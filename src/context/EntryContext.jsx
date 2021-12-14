import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
    const [entries, setEntries] = useState([]);

    return <EntryContext.Provider value={{entries, setEntries}}> { children } </EntryContext.Provider>

}

const useEntries = () => {
    const context = useContext(EntryContext);

    if(context === undefined){
        throw Error('useEntries must be used within an EntryContext Provider');
    }

    return context
}

export { EntryProvider, useEntries}
