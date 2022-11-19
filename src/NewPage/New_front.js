import axios from "axios";
import { useEffect, useState } from "react";


export default function New_front() {
    const [data,setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const getData = async() =>{
            try{
                const response = await axios.get('http://localhost:5051/nba/times')
                setData(response.data)
                setError(null)
            }catch(err){
                setError(err.message)
            }
        }
        getData()
    },[])

    return(

        <div>
            <li><Link to="/"> Home Page</Link></li>
            {data && data.map(({name})=>(
                <h1>{name}</h1>
            ))}
        </div>
    )

}