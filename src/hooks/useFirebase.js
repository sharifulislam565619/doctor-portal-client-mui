import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "../Firebase/firebase.init";



initializationAuthentication()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
   const [user, setUser] = useState({})
   const [isLoading, setIsLoading] = useState(true)
   const [error, setError] = useState('')
   const [admin, setAdmin] = useState(false)
   const [token, setToken] = useState('')

   const auth = getAuth();

   const signInWithGoogle = (navigate, location) => {
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            setUser(result.user);
            saveUser(result.user.email, result.user.displayName, "PUT")

            navigate(location?.state?.from || '/')

         }).catch((error) => {
            setError(error.message);
         }).finally(() => {
            setIsLoading(false)
         });
   }


   const userRegister = (email, password, name, navigate, location) => {
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const newUser = { email, displayName: name }
            setUser(newUser)
            saveUser(email, name, "POST")
            setError('');
            updateProfile(auth.currentUser, {
               displayName: name
            }).then(() => {


            }).catch((error) => {

            });

            alert("user register successfully")
            navigate(location?.state?.from || '/')

         })
         .catch((error) => {

            const errorMessage = error.message;
            setError(errorMessage);
         })
         .finally(() => {
            setIsLoading(false)
         });
   }

   const userLogIn = (email, password, navigate, location) => {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {

            const user = userCredential.user;
            setUser(user)
            navigate(location?.state?.from || '/')
            setError('');
         })
         .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
         })
         .finally(() => {
            setIsLoading(false)
         });;

   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {

            setUser(user)
            getIdToken(user)
               .then(idToken => setToken(idToken))
         } else {
            setUser({})
         }
         setIsLoading(false)
      });
      return () => unSubscribe;
   }, [])



   useEffect(() => {
      fetch(`https://aqueous-journey-67105.herokuapp.com/users/${user?.email}`)
         .then(res => res.json())
         .then(data => {

            setAdmin(data.admin)

         }).catch(() => {

         })
   }, [user?.email])


   const logOut = () => {

      signOut(auth).then(() => {

      }).catch((error) => {

      })
         .finally(() => {
            setIsLoading(false)
         })
         ;
   }

   const saveUser = (email, displayName, method) => {
      const user = {
         email, displayName
      }
      fetch("https://aqueous-journey-67105.herokuapp.com/users", {
         method: method,
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(user)

      })
         .then(res => res.json())
         .then(data => console.log(data))

   }

   return {
      token, admin, user, setUser, logOut, userRegister, userLogIn, isLoading, error, signInWithGoogle
   }
};

export default useFirebase;