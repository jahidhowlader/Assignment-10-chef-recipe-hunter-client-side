import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../utils/firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signinWithGoogle = () => {

        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {

        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscriber = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unsubscriber
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signinUser,
        signinWithGoogle,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;