import React, { useState } from "react";

import "./Reg.css";

function Reg() {
  const [user, setuser] = useState();

  function verify() {
    document.getElementById("popup").style.visibility = "hidden";
  }

  return (
    <div className="reg_form">
      {user ? (
        <>
          <h1>User detail</h1>
          <form className="user_info">
            <input
              className="user_data"
              type="text"
              placeholder="Enter Name "
            />
            <input
              className="user_data"
              type="text"
              placeholder="enter Password"
            />
            <input className="user_data" type="submit" value="Login" />
            <h2>
              switch to
              <a
                href="#"
                onClick={(e) => {
                  setuser(false);
                }}
              >
                Seller
              </a>
            </h2>
          </form>
        </>
      ) : (
        <>
          <h1>Seller detail</h1>
          <form className="seller_info">
            <input
              className="seller_data"
              type="text"
              placeholder="Enter Name "
            />
            <input
              className="seller_data"
              type="tel"
              placeholder="Enter Phone Number"
            />
            <input
              className="seller_data"
              type="tel"
              placeholder="Enter Aadhar Number"
              value={undefined}
            />

            {/* <input className="seller_data" type="button" value="okay" /> */}
            <input className="seller_data" type="button" value="Okay" />
            <h2>
              switch to
              <a
                href="#"
                onClick={(e) => {
                  setuser(true);
                }}
              >
                user
              </a>
            </h2>
          </form>
        </>
      )}
      <div id="popup">
        <h1>Select your choice's</h1>

        <div className="btn">
          <button
            onClick={(e) => {
              setuser(true);
              verify();
            }}
          >
            User
          </button>
          <button
            onClick={(e) => {
              setuser(false);
              verify();
            }}
          >
            Seller
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reg;
