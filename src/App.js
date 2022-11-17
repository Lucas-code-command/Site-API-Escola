import React from 'react';
import App2 from './App2';
import NavBar from './Navbar/Navbar';
import MyData from './data_API/Get/MyData';
import Post from './data_API/Post/Post.js';
import {Link} from 'react-router-dom';


export default function APP() {
const pessoa = {
  nome:"Lucas",
  idade:21,
  foto:"https://img.olhardigital.com.br/wp-content/uploads/2021/09/Apple-Event-September-2021.jpeg"
}
const pessoa1 ={
  nome:"Teste",
  idade:2,
  foto:'0'
}
return(
    <div>
      <NavBar />
      <div style={{
        display:'flex',
        boxSizing: 'border-box',
        justifyContent: 'space-around',
        margin:'10px 0px',
        textAlign:'center'
        }}>
          <App2 
          nome = {pessoa.nome}
          idade = {pessoa.idade}
          foto = {pessoa.foto}
          />
          <App2 
          nome = {pessoa1.nome}
          idade ={pessoa1.idade}
          foto={pessoa.foto} 
          />
          <App2 
          nome = {pessoa.nome}
          idade = {pessoa.idade}
          foto = {pessoa.foto}
          />
      </div>
      <Post />
      <MyData />
      <ul>
        <h2>Api Disponíveis:</h2>
        <li><Link to ="/wiki"> Wiki API</Link> </li>
        <li><Link to="/btc"> BTC API</Link></li>
        <li><Link to="/formula1">Formula1</Link></li>
        <li><Link to='/webfront'>The gardian API</Link></li>
      </ul>
    </div>
);
}