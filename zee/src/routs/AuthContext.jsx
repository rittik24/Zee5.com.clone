import {createContext, useState} from "react";
export const authContext = createContext();

let temp = {
    isAuth: false,
    token: null
}

function AuthContextProvider({children}){
    const [state, setState] = useState(temp)

    const handlelogin = (val) => {
        setState({isAuth:true, token: val})
    }

    const handlelogout = () => {
        setState(temp)
        localStorage.removeItem('token');
    }

    return (
    <authContext.Provider value={{state, handlelogin, handlelogout}}>
        {children}
    </authContext.Provider>
    )
}

export default AuthContextProvider;