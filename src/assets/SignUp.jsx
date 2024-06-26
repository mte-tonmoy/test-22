import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  const handleRegister = () => {
    if (password){
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
    else{
      console.log('Type The Password Correctly')
    }
  };
  console.log(email, password);
  return (
    <div className="flex min-h-[100vh] items-center flex-1 flex-col justify-center px-6 py-10 lg:px-8 overflow-hidden">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm overflow-hidden">
        <img
          className="mx-auto h-20 w-auto"
          src="http://acigodrejagrovet.com//wp-content/uploads/2017/03/LogoRe-300x118.png"
          alt="ACI Godrej Agrovet Private Ltd"
          title=""
        />
        <h2 className="text-center text-2xl leading-9 text-gray-750 font-bold tracking-wide mb-6">
          ACI Godrej Agrovet Private Limited
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form className="space-y-5" action="#" method="POST">
          <div></div>

          <label className=" ">
            <select className="select input input-bordered flex items-center gap-2 w-full text-indigo-500 tracking-wide font-semibold hover:bg-indigo-50 ">
              <option value="DEFAULT" disabled>
                Pick the role suits you
              </option>
              <option>Store</option>
              <option>Manager</option>
              <option>User</option>
            </select>
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
