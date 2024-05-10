import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {bgurl, useravtar} from "../utils/Constant"
import { adduser } from "../utils/Usersclice";
import { useDispatch } from "react-redux";



const Login = () => {
  const [sign, setsign] = useState(true);
  const [errormessage, seterrormessage] = useState(null);
 

  const name = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch=useDispatch();

  const togglesignin = () => {
    setsign(!sign);
  };

  const validclick = () => {
    const message = checkValidData(
      emailRef.current?.value,
      passwordRef.current?.value
    );
    seterrormessage(message);
    if (!message) {
      if (!sign) {
        createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL:useravtar
            }).then(() => {
              const {uid,email,displayName ,photoURL}=auth.currentUser;
              dispatch(
                adduser({
                  uid:uid,
                  email:email,
                  displayName:displayName ,
                  photoURL:photoURL}))
              
              
            }).catch((error) => {
              seterrormessage(error.message)
            });
            
            
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/email-already-in-use') {
                seterrormessage("Email address is already in use. Please sign in instead.");
            } else {
                seterrormessage(`${errorCode} - ${errorMessage}`);
            }
          });
      } else {
        signInWithEmailAndPassword(auth,
          emailRef.current?.value,
          passwordRef.current?.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormessage(`${errorCode} - ${errorMessage}`);
          });
      }
    }
  };

  return (
    <>
        <Header />
      <div className="absolute h-72 bg-red-500">

        <img
          className="h-screen w-screen"
            src={bgurl}          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-5 bg-black my-16 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {sign ? "Sign in" : "Sign up"}
        </h1>
        {!sign && (
          <input
            ref={name}
            type="text"
            placeholder="Fullname"
            className="p-2 my-2 w-full bg-gray-800"
          />
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter an email"
          autoComplete="email"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter a password"
          autoComplete="current-password" 
          className="p-2 my-2 w-full bg-gray-800"
        />
        <p className="text-red-700 my-2 m-1 mx-3 px-4 font-bold">
          {errormessage}
        </p>
        <button
          onClick={validclick}
          type="button"
          className="p-2 my-6 w-full bg-red-600"
        >
          {sign ? "Sign in" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={togglesignin}>
          {sign
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </>
  );
};

export default Login;
