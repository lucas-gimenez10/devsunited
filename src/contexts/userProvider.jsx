import { createContext, useState, useEffect } from "react";
import { handleAuthChange } from "../services/auth";

export const userContext = createContext()

const UserProvider = ({ children }) => {

   const [user, setUser] = useState(null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const unsubscribe  = await handleAuthChange((user) => {
            if(user) {
                // user is sign in 
                setUser(user)
            } else {
                // user is logout
                setUser(null)
            }
        });
        return () => unsubscribe ();
    }, [])

    return <userContext.Provider value={user}> {children} </userContext.Provider>
}

export default UserProvider