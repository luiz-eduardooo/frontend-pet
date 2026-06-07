import { useState } from "react";
import { criarUsuario } from "../../usuarios/services/usuarioService";
import { useNavigate } from "react-router-dom";

export function CadastroUsuario(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handlerCadastroUsuario = async(e)=>{
        e.preventDefault();
        try{
            const data = criarUsuario({name, email, password})
            navigate("/login")
        }
        catch(error){
            console.error(error)
        }
    }
    return(
            <div>
                <form onSubmit={handlerCadastroUsuario}>
                    <input type="text" name="nome" value={name} onChange={(el)=> setName(el.target.value)} />
                    <input type="email" name="email" value={email} onChange={(el)=> setEmail(el.target.value)} />
                    <input type="password" name="password" value={password} onChange={(el)=> setPassword(el.target.value)} />
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
        )
}