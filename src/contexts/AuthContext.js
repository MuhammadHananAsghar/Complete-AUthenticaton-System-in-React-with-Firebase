import { createContext, React, useContext } from "react";
import { useState, useEffect } from "react";
import { auth } from '../firebase';


const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthState = (props) => {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    // Function to SignUp User
    function SignUpUser(email, password){
        return auth.createUserWithEmailAndPassword(email, password);
    }

    // Function to SignIn User
    function SignInUser(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    // Function to logout
    function SignOutUser(){
        return auth.signOut();
    }

    // Function to send reset email
    function ResetEmail(email){
        return auth.sendPasswordResetEmail(email);
    }
    
    // Run When the Function Calls
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])
    
    return (
        <AuthContext.Provider value={{ currentUser, SignUpUser, ResetEmail, SignInUser, SignOutUser }}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
}
