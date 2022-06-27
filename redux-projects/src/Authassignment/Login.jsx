import axios from 'axios'
import React from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { hide } from './Authprovider'

const Login = () => {
    const [state,dispatch] = React.useContext(hide)
    let [searchParams,setSearchParams] = useSearchParams()
    // console.log(state)
    const navigate = useNavigate()

    const Logincheck=()=>{
        axios({
            url:"https://reqres.in/api/login",
            method:"POST",
            data:{
                email:"eve.holt@reqres.in",
                password:"cityslicka"
            }
        }).then((res)=>{
            alert("success")
            dispatch({
                type:"Loginsuccess",
                payload:res.data.token
            })
            navigate("/userdata/1")
            const redirect = searchParams.get("redirectTo")
            console.log(redirect,"url")
            if(redirect){
                navigate(redirect)
            }
            else{
            navigate("/userdata")
            }
            // setAuth(true)
        }).catch((err)=>{
            alert("failure")
        })
    }
    if(state.isAuth){
       return <Navigate to="/userdata"></Navigate>
    }
  return (<>
    <div>Login</div>
    <button onClick={Logincheck}>Log in </button>
    </> )
}

export default Login