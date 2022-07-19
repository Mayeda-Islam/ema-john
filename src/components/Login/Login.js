import React from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SingUp from "../SingUP/SingUp";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
   const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
   let navigate = useNavigate();
   let location = useLocation();
   let from = location.state?.from?.pathname || "/";

   const [email, setEmail] = useState("");
   const handleEmail = (e) => {
      setEmail(e.target.value);
   };
   const [password, setPassword] = useState("");
   const handlePassword = (e) => {
      setPassword(e.target.value);
   };
   const formSubmit = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(email, password);
   };
   if (user) {
      navigate(from, { replace: true });
   }

   return (
      <div className="form-container">
         <div>
            <h2 className="form-title">Log In</h2>
            <form onSubmit={formSubmit} action="">
               <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                     onBlur={handleEmail}
                     type="email"
                     name="email"
                     id=""
                     required
                  />
               </div>
               <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                     onBlur={handlePassword}
                     type="password"
                     name="password"
                     id=""
                     required
                  />
               </div>
               <p style={{ color: "red" }}>{error?.message}</p>
               {loading && <p>loading....</p>}
               <input
                  className="form-submit"
                  type="submit"
                  value="login"
                  required
               />
               <p>
                  New to Ema-john?
                  <Link className="form-link" to="/singup">
                     create your account
                  </Link>
               </p>
               <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="horizontal-line">
                     {" "}
                     <hr />
                  </div>
                  <p style={{ padding: "10px" }}>or</p>
                  <div className="horizontal-line">
                     {" "}
                     <hr />
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
