import React, {createContext, useState} from 'react'
const ticketContext = createContext();

const TicketContextProvider = ({children}) => {
    const [ticket, setTicket] = useState("");
    return (
        <ticketContext.Provider value={{ticket, setTicket}}>
            {children}
        </ticketContext.Provider>
    )
}

export {TicketContextProvider};
export default ticketContext;
