import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from 'react-router-dom';
import "/Users/lukemoliterno/Desktop/React/tentativa/src/Web_scraping/web.css"


export default function Webfront(){
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getData = async() => {
            try{
                const response = await axios.get("http://localhost:5050/news");
                setData(response.data);
                setError(null)
            }catch(err){
                setError(err.message);
                setData(null)
            }finally{
                setLoading(false)
            }
        }
        getData()
    }
    
    ,[])

    return(
        
        <div>
            {error && (<div>{`There is a problem ${error}`}</div>)}
            <div>
            <li> <Link to="/">Home Page</Link></li>
                {data && data.map(({title,linked})=> (
                <div className="bloquinho">
                    <ul><h1>{title}</h1></ul>
                    <ul><a href = {linked}>{linked}</a></ul>
                </div>
            ))
              
        }</div>
        </div>
    )
}