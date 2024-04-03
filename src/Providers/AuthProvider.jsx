import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
                console.log('observing current user', user)
            }
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {user, createUser, signInUser}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children: PropTypes.node
}

export default AuthProvider;