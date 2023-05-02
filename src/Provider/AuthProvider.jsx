import { createUserWithEmailAndPassword, getAuth  } from "firebase/auth";

import { createContext } from "react";
import app from "../utils/firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        test: 'Hello',
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;