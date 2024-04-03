import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase";
import { signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [loading, setLoading] =useState(true)
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            console.log('observing current user', user)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = { signInWithGoogle, user, loading, createUser, signInUser, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;