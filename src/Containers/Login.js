import "../App.css"
import axios from 'axios';
import { useState } from 'react';
const Login = ({token , setToken}) => {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState("");


    const loginHandler = () =>{
        setError("");
        setPassword("");
        setUsername("");
        axios({
            method:"POST",
            url:"https://fakestoreapi.com/auth/login",
            data:{
                username:username,
                password:password,
            },
        }).then(response =>{
            console.log(response.data.token)
            setToken(response.data.token)
            localStorage.setItem("userToken",response.data.token)
        }).catch((err) =>{
            console.log(err.response.data)
            setError(err.response.data)
        })
    }
  return (
    <div className='login'>
       <div className='login-inputs'>
            <input value={username}
             onChange={(e) =>setUsername(e.target.value)}
             type='text'
             placeholder='username'
            />
            <input value={password}
             onChange={(e) =>setPassword(e.target.value)}
             type='password'
             placeholder='password'
            />
            {error && <small>{error}</small>}
            <button onClick={loginHandler}>Login</button>
       </div>
    </div>
  );
}

export default Login;