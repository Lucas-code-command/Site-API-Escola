import '/Users/lukemoliterno/Desktop/React/tentativa/src/data_API/Post/Post.css'
import Selection from './Selection'
//import {useHistory} from 'react-router-dom';

export default function Post() {
    //let history = useHistory()

    return(
        <div className="principal_post">
            <form  action="http://localhost:5000/clients"  method="POST">
                <Selection />
                 <input 
                 type="text"
                 placeholder="SETOR"
                 name="setor"
                 />
                 <input 
                 type="text"
                 placeholder="Conteúdo"
                 name='conteudo'
                 />
                 <input 
                 type="submit"
                 value="Cadastrar"
                />
            </form>
        </div>
    )
}