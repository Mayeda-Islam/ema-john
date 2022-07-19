import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SingUp = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [error, setError] = useState("");
   let navigate = useNavigate();
   const [createUserWithEmailAndPassword, user] =
      useCreateUserWithEmailAndPassword(auth);
   const handleEmailBlur = (e) => {
      setEmail(e.target.value);
   };
   const handlePasswordBlur = (e) => {
      setPassword(e.target.value);
   };
   const handleConfirmPasswordBlur = (e) => {
      setConfirmPassword(e.target.value);
   };
   if (user) {
      navigate("/shop");
   }
   const fromSubmit = (e) => {
      e.preventDefault();

      createUserWithEmailAndPassword(email, password);
   };

   console.log(email, password);

   return (
      <div className="form-container">
         <div>
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={fromSubmit}>
               <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                     onBlur={handleEmailBlur}
                     type="email"
                     name="email"
                     required
                  />
               </div>
               <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                     onBlur={handlePasswordBlur}
                     type="password"
                     name="password"
                     required
                  />
               </div>
               <div className="input-group">
                  <label htmlFor="confirm-password">Confirm password</label>
                  <input
                     onBlur={handleConfirmPasswordBlur}
                     type="password"
                     name="password"
                     required
                  />
               </div>
               <p style={{ color: "red" }}>{error}</p>
               <input
                  style={{ cursor: "pointer" }}
                  className="form-submit"
                  type="submit"
                  value="Sign Up"
               />
               <p>
                  Already have an account?
                  <Link className="form-link" to="/login">
                     Login
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

export default SingUp;
