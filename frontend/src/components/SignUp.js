import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate("");

  useEffect(()=>{
    const auth= localStorage.getItem('user');
    if(auth)
    {
      navigate('/')
    }
  })

  const collectData=async()=>{
    console.warn(name, email, password);
    let result = await fetch('http://127.0.0.1:5000/register',{
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result.result));    
    localStorage.setItem("token",JSON.stringify(result.auth));    

    navigate('/');
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputbox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <input
        className="inputbox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />

      <input
        className="inputbox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />

      <button onClick={collectData} className="appbutton" type="button">
        Submit
      </button>
    </div>
  );
};

export default SignUp;
