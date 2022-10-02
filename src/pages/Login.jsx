import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import "../style.scss";
import { auth } from "../firebase";


const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
   
    const email = e.target[0].value;
    const password = e.target[1].value;
   
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')

     
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Key Chat</span>
        <span className="title"> Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>

          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account?<Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
