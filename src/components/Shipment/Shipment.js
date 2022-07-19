import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
   const [user] = useAuthState(auth);
   const [error, setError] = useState("");
   const [email, setEmail] = useState("");
   const handleEmail = (e) => {
      setEmail(e.target.value);
   };
   const [name, setName] = useState("");
   const handleName = (e) => {
      setName(e.target.value);
   };
   const [address, setAddress] = useState("");
   const handleAddress = (e) => {
      setAddress(e.target.value);
   };
   const [phone, setPhone] = useState("");
   const hadlePhone = (e) => {
      setPhone(e.target.value);
   };
   const formSubmit = (e) => {
      e.preventDefault();
      const shipment = [email, phone, address, name];
      console.log(shipment);
   };
   return (
      <div>
         <div className="form-container">
            <div>
               <h2 className="form-title">Shipping Information</h2>
               <form onSubmit={formSubmit} action="">
                  <div className="input-group">
                     <label htmlFor="name">Name</label>
                     <input
                        onBlur={handleName}
                        type="name"
                        name="name"
                        id=""
                        required
                     />
                  </div>
                  <div className="input-group">
                     <label htmlFor="address">Email</label>
                     <input
                        onBlur={handleEmail}
                        value={user?.email}
                        readOnly
                        type="email"
                        name="email"
                        id=""
                        required
                     />
                  </div>
                  <div className="input-group">
                     <label htmlFor="name">Address</label>
                     <input
                        onBlur={handleAddress}
                        type="text"
                        name="name"
                        id=""
                        required
                     />
                  </div>

                  <div className="input-group">
                     <label htmlFor="">Phone</label>
                     <input
                        onBlur={hadlePhone}
                        type="text"
                        name="phone"
                        id=""
                        required
                     />
                  </div>
                  <p style={{ color: "red" }}>{error?.message}</p>

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
      </div>
   );
};

export default Shipment;
