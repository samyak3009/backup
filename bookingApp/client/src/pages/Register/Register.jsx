import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

import "./Register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email:undefined,
    country: undefined,
    city: undefined,
    phone:undefined,
    password: undefined
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/auth/register", credentials);
      console.log(res);
      navigate("/login")
    } catch (err) {
      alert(err);
    }
  };


  return (
    <div>
      <Navbar/>
     <div className="login">

<div className="lContainer">
  <div className="Rflow">
  <input
    type="text"
    placeholder="username"
    id="username"
    onChange={handleChange}
    className="lInput"
  />
  &nbsp;
  <input
    type="email"
    placeholder="email"
    id="email"
    onChange={handleChange}
    className="lInput"
  />
  </div>
 <div className="Rflow">
 <input
    type="text"
    placeholder="country"
    id="country"
    onChange={handleChange}
    className="lInput"
  />
  &nbsp;
  <input
    type="text"
    placeholder="city"
    id="city"
    onChange={handleChange}
    className="lInput"
  />
 </div>

  <input
    type="text"
    placeholder="phone"
    id="phone"
    onChange={handleChange}
    className="lInput"
  />
  <input
    type="password"
    placeholder="password"
    id="password"
    onChange={handleChange}
    className="lInput"
  />
  <button onClick={handleClick} className="lButton">
    Register
  </button>
</div>
</div>   
    </div>
   
  );
};

export default Register;
