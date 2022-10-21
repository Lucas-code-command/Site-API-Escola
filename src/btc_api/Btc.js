import { useEffect, useState } from "react"
import '/Users/lukemoliterno/Desktop/React/tentativa/src/btc_api/btc.css'
import axios from "axios"
import { Link } from "react-router-dom";


export default function Btc(){
    //https://api.coindesk.com/v1/bpi/currentprice.json
    const[data,setData] = useState(null);
    const [error,setError] = useState(null);
    const[loading,setLoading] = useState(true)

    useEffect(()=>{
        let url = `https://api.coindesk.com/v1/bpi/currentprice.json`

        const getData = async() =>{
            try{
                const response = await axios.get(url);
                setData(response.data);
                setError(null)
            }catch(err){
                setError(err.message);
                setData(null)
            }
            finally{
                setLoading(false)
            }
        }
        getData()
    }
    ,[])

    function dataBpi() {
        var returned = data.bpi
        return returned
    }

    
    return(
        <div>
            {loading && <div>a moment please</div>}
            {error && (<div>{`There is a problem -${error}`}</div>)}
            <div>
                {data && 
                <div>
                    <div className="header">
                        <h1 className="chartName">{data.chartName}</h1>
                        <h4 className="updated">{data.time.updated}</h4>
                    </div>
                    <div className="content">
                        <h2>Preço</h2>
                        <h2>Moeda</h2>
                        <h3 className="rate">{dataBpi().USD.rate}</h3>
                        <h4 className="code">{dataBpi().USD.code} - {dataBpi().USD.description}</h4>
                        <h2>Preço</h2>
                        <h2>Moeda</h2>
                        <h3 className="rate">{dataBpi().EUR.rate}</h3>
                        <h4 className="code">{dataBpi().EUR.code} - {dataBpi().USD.description}</h4>

                        
                    </div>
                    <div className="refresh">
                        <button onClick={()=>{window.location.reload(true)}}>Refresh</button>
                    </div>
                    <div className="Link">
                        <Link to='/'>Home</Link>
                    </div>
                    <script>{console.log(data)}</script>
                </div>
                }
            </div>
        </div>
       
    )
}