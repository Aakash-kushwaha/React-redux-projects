import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const Userdetails = () => {
    const [details,setDetails] = React.useState([])
    const {id} = useParams()
  

    React.useEffect(()=>{
     
      console.log(id,"id")
        axios({
            url:`https://reqres.in/api/users/${id}`,
          
        }).then((el)=>setDetails(el.data.data))
    },[])
    console.log(details)
  return (
    <div>
     <img width="50px" src={details.avatar}></img>
     <p>{details.first_name}_{details.last_name}</p>
     <p>{details.email}</p>
    </div>
  )
}

export default Userdetails