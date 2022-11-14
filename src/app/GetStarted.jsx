import React from "react";
import { useState } from "react";
import axios from "axios";
import api from "./../config/basicConfig";

function GetStarted() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirm, setPasswordComfirm] = useState("");
  const [username, setUsername] = useState("");
  const [telephone, setTelephone] = useState("");

  const [error, setError] = useState([]);

  const handleGetStarted = () => {
    setError([]);
    if (password !== passwordComfirm) {
      const error = ["Password does not match"];
      return setError(error);
    }
    const user = {
      fullName: fullName,
      email: email,
      username: username,
      password: password,
      telephone: telephone,
    };

    axios
      .post(api.offlineUrl + "/api/users", user)
      .then((res) => console.log("result"))
      .catch((err) => setError(err.response.data.error));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row py-5 px-5 md:space-x-9">
        <div className="bg-gray-200 py-8 px-5 rounded-lg w-100 md:w-5/12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[900] text-slate-900">
            Get started with NOVA company limited
          </h1>
          <p className="text-xl">
            Let us create your account in order to access our online services
          </p>
        </div>

        <div className="flex flex-col space-y-5 w-100 md:w-7/12">
          {error.length !== 0 && (
            <div className="text-red-500 bg-red-100 py-1 rounded border border-red-200">
              <ul className="ml-8">
                {error.map((err, i) => (
                  <li type="square" key={i}>
                    {err}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="names" className="text-xl text-gray-500">
              Full name
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="ex: John Doe"
              className="border-0 border-b-2 py-1 outline-0"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl text-gray-500">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="ex:  novaservicesltd@gmail.com"
              className="border-0 border-b-2 py-1 outline-0"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl text-gray-500">
              Telephone
            </label>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              type="text"
              placeholder="ex:  0712345678"
              className="border-0 border-b-2 py-1 outline-0"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl text-gray-500">
              User name
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="ex:  novaservicesltd"
              className="border-0 border-b-2 py-1 outline-0"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-xl text-gray-500">
              Pasword
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="provide strong password"
              className="border-0 border-b-2 py-1 outline-0"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password-comfirm" className="text-xl text-gray-500">
              Confirm your Pasword
            </label>
            <input
              onChange={(e) => setPasswordComfirm(e.target.value)}
              type="password"
              placeholder="provide strong password"
              className="border-0 border-b-2 py-1 outline-0"
            />
          </div>

          <div className="flex flex-col">
            <button
              onClick={handleGetStarted}
              className="bg-indigo-700 hover:bg-indigo-800 py-2 rounded-full text-white font-[500] w-100"
            >
              Get Started
              <i className="fa fa-angle-double-right pl-3" />
            </button>
          </div>

          <div className="flex items-center justify-center px-5">
            <div className="w-[100%] border"></div>
            <span className="px-4">or</span>
            <div className="w-[100%] border"></div>
          </div>

          <div className="flex items-center justify-start px-5">
            <span>Continue with</span>
          </div>

          <div className="flex flex-row gap-3">
            <button className="bg-red-700 hover:bg-red-800 py-2 rounded-lg text-white font-[500] w-100 px-5">
              <i className="fa fa-google pr-3" />
              gmail
            </button>

            <button className="bg-indigo-700 hover:bg-indigo-800 py-2 rounded-lg text-white font-[500] w-100 px-5">
              <i className="fa fa-facebook pr-3" />
              facebook
            </button>

            <button className="bg-sky-700 hover:bg-sky-800 py-2 rounded-lg text-white font-[500] w-100 px-5">
              <i className="fa fa-twitter pr-3" />
              twitter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
