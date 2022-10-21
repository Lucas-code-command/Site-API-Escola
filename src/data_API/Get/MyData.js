import { useEffect, useState } from "react";
import '/Users/lukemoliterno/Desktop/React/tentativa/src/data_API/Get/MyData.css'


export default function MyData(){
    const[data,setData] = useState(null)
    const [error,setError]=useState(null)
    const[loading, setLoading]=useState(true)

    useEffect(()=>{
        const getData = async() =>{
            try{
                const res = await fetch(
                        `http://localhost:5000/clients`
                )
                if(!res.ok){
                    throw new Error(
                        `This is an HTTP error: The Status is ${res.status}`
                    )
                }
                let actualData = await res.json();
                setData(actualData); setError(null);
            }
            catch(error){
                setError(error.message); setData(null);
            }
            finally{
                setLoading(false)
            }
        }
        getData()
    }, [])

    return(
        <div>
            {loading && <div> A moment please...</div>}
            {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
            <ul>
                {data && data.map(({id, status,setor,conteudo})=> (
                    <div className="principal_get">
                        <h2>Status</h2>
                        <li key={id}><h3>{status}</h3></li>
                        <h2>Setor</h2>
                        <li key={id}><h3>{setor}</h3></li>
                        <h2>Conteúdo</h2>
                        <li key={id}><h3>{conteudo}</h3></li>
                    </div>
                ))}
            </ul>
        </div>
    )



}