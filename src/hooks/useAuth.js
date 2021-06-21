import React, { useState,useEffect,useContext,createContext} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth'

//Initialise Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBy55sO1615SVHRt7dq8s0odyKiltjkOv0",
    authDomain: "task-4d5bd.firebaseapp.com",
    databaseURL: "https://task-4d5bd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "task-4d5bd",
    storageBucket: "task-4d5bd.appspot.com",
    messagingSenderId: "474694366952",
    appId: "1:474694366952:web:5520b2fc7f802cf0097b5d"

})

const AuthContext = createContext()

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(AuthContext);
  };

// Provider hook that creates auth object and handles state
export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [isAuthenticating, SetIsAuthenticating] = useState(true) //this is used to prevent the website from going back to the login screen while checking if user is logged in

    const sendSignInLinkToEmail = email => {
        return firebase.auth().sendSignInLinkToEmail(email,{
            url: 'http://localhost:3000/confirm',
            handleCodeInApp:true,
        }).then(()=>{
            return true
        });
    };

    const signInWithEmailLink = (email,code) => {
        return firebase.auth().signInWithEmailLink(email,code).then(result => {
            setUser(result.user)
            return true
        });
    };
    const logout = () => {
        return firebase.auth().signOut().then(()=>{
            setUser(null);
        })
    }

    useEffect(()=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
            setUser(user)
            SetIsAuthenticating(false)
        });

        return () => unsubscribe();
    },[]);

    const values = {
        user,
        isAuthenticating,
        sendSignInLinkToEmail,
        signInWithEmailLink,
        logout
    }

    return(
       <AuthContext.Provider value={values}>
           {!isAuthenticating && children}
       </AuthContext.Provider> 
    )
};
