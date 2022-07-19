import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import SingUp from "../SingUP/SingUp";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
   const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
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
      createUserWithEmailAndPassword(email, password);
   };
   console.log(email, password);

   const nevigate = useNavigate();
   if (user) {
      nevigate("/shop");
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
