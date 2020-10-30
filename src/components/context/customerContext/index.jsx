import React, {createContext, useState} from 'react'
const customerContext = createContext();

const CustomerContextProvider = ({children}) => {
    const [customer, setCustomer] = useState("");
    return (
        <customerContext.Provider value={{customer, setCustomer}}>
            {children}
        </customerContext.Provider>
    )
}

export {CustomerContextProvider};
export default customerContext
