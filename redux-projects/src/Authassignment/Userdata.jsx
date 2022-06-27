import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import { hide } from './Authprovider'


const Userdata = () => {

  const [searchParams,setSearchParams] = useSearchParams()
    const [data,setData]= React.useState(null)
    const [loading,setLoading]= React.useState(true)

    const [state] = React.useContext(hide)
     
    const [page,setpage] = useState(Number(searchParams.get("page")|| 1))
   

    
    React.useEffect(()=>{
         axios({
             url:"https://reqres.in/api/users",
             method:"GET",
             params:{
                 page      
             }
         }).then((res=>{setData(res.data.data);setLoading(false)})).catch((err)=>console.log(err))
    },[page])
   
    React.useEffect(()=>{
setSearchParams({
  page
})
    },[page])
 
    console.log(data,"data")
  return (
    <div >
    {
      state.token && <h3>{state.token}</h3>
    }
    {
        loading && <div>...loading</div>
    }
    <div>
      <button disabled={page===1} onClick={()=>setpage(page-1)}>prev</button>
      <button disabled={page===2} onClick={()=>setpage(page+1)}>Next</button>
    </div>
    { data?.map((el)=>(
            <div style={{marginTop:"1rem"}} key={el.first_name}>{el.first_name}  
            <div>{el.email}</div>
            <Link to={`/userdata/${el.id}`}>see more</Link>
            </div>

        ))}
    </div>
  )
}

export default Userdata