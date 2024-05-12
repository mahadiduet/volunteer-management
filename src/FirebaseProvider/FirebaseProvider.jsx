import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // Create User using email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update user
    const updateUser = (displayName, photoURL) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }

    // User login
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Login with google 
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Logout User
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            // console.log('Logout Successfull');
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    // On Auth State Changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        // console.log(res.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        // console.log(res.data);
                    })
            }
        });
        return () => unsubscribe();
    }, [])

    const allValues = {
        createUser,
        updateUser,
        login,
        googleLogin,
        logOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;