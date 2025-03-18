/* eslint-disable no-unused-vars */
import { Route, Routes, useNavigate } from "react-router"
import Navbar from "./components/Navbar"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"
import { useEffect, useState } from "react";
import Users from "./pages/Users";
import Products from "./pages/Products";
import axios from "axios";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
        const response =await axios.post("http://localhost:5000/api/user/login", {
            email,
            password})
            if(!response.data.success){
                console.log(response.data)
                alert(response.data.success)
            }else{
                console.log(response)
                setToken(response.data.token);
                navigate("/dashboard")
            }
    } catch (error) {
        console.log(error.response.data.message)
        alert(error.response.data.message)
    }
  };

  const [token,setToken] = useState(localStorage.getItem("token")? localStorage.getItem("token"):"");

  useEffect(() => {
    localStorage.setItem("token",token)
  }, [token]);
  
  return (
    <div>
      {token === '' ? <AdminLogin setToken={setToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSubmit={handleSubmit}/> :
      <>
      <Navbar setToken={setToken}/>
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
       </>}
    </div>
  )
}

export default App
