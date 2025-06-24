import{ useState } from "react";
import notebook from "./../../assets/notebook.jpg"
import './testes.css'

function Testes(){


    // const nome= "Helen Laís";
    const [nome, mudaNome] =useState("Usuário")


    return (

        <div>
            {/* <img src={notebook} alt="Imagem Notebook" /> */}
            <h1>Seja Bem Vindo {nome}</h1>
            <button onClick={() => {
                // alert("Sem tempo Irmão")
                mudaNome("Helen")
            }}>Clique Aqui</button>
        </div>
    );
}

export default Testes;