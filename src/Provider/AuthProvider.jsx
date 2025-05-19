import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoding] = useState(true);

   
    const createUser = (email, password) => {
       setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };
    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        setLoding(true)
        
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
           setLoding(false)
           
        });
        return () => {
            unsubscribe();

        };

    }, []);
    const authdata={
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,loading,setLoding

    }
    return <AuthContext value={authdata}>
       {children}
    </AuthContext>
};

export default AuthProvider;