//props = {}

function App2({nome, idade, foto}){


    return(
        <div style={{height:'20%', width:'20%'}}>
            <img src={foto} alt={nome} style={{width:'60%'}}/>
            <p>Olá {nome}, tudo bem?</p>
            <p>Sua idade: {idade}</p>
        </div>
    )
}

export default App2;