import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';


export default function New_front() {
    const [data,setData] = useState(null)
    const[error, setError] = useState(null)

    useEffect(()=>{
        const getData = async() =>{
            try{
                const response = await axios.get('http://localhost:5051/')
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
            <h1>worked??</h1>
            {error && (<div>{`there problem ${error}`}</div>)}
            {data && data.map(({name})=>(
                <h1>{name}</h1>
            ))}
        </div>
    )

}