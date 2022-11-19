import axios from "axios";
import { useEffect, useState } from "react";


export default function New_front() {
    const [data,setData] = useState(null)
    const[error, setError] = useState(null)

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
    const [pontos,setPontos]=useState(null)
    useEffect(()=>{
        const getData = async() =>{
            try{
                const response = await axios.get('http://localhost:5051/nba/pontos')
                setPontos(response.pontos)
                setError(null)
            }catch(err){
                setError(err.message)
            }
        }
        getData()
    },[])

    return(

        <div>
            <div>
                <h1>YEEEES</h1>
            </div>
                <div>
                    {error && <h1>{`problem ${error}`}</h1>}
                    {data && data.map(({name})=> (
                        <div>
                            <ul><li>{name}</li></ul>
                        </div>
                        ))
                    }   
                    {pontos && pontos.map(({point})=>(
                        <div>
                            <ul><li>{point}</li></ul>
                        </div>
                    ))}
                </div>
            </div>
    )

}