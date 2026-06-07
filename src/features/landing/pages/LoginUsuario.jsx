import { useState } from 'react'
import { useAuth } from '../../../shared/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { loginUsuario } from '../../usuarios/services/usuarioService';

const LoginUsuario = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {entrar} = useAuth();
    const navigate = useNavigate();

    const handlerLogin = async (e)=>{
        e.preventDefault();
        try{
            const data = await loginUsuario({email, password});
            entrar({...data.user, token: data.token, tipo: 'usuario'})
            navigate('/')
        }
        catch(error){
            console.error(error)
        }
    }
  return (
    <div>
      <form onSubmit={handlerLogin}>
        <input type="email" name="email" value={email} required onChange={(el)=> setEmail(el.target.value)} />
        <input type="password" name="password" value={password} required onChange={(el)=> setPassword(el.target.value)} />
        <input type="submit" value="Entrar" />
      </form>
    </div>
  )
}

export default LoginUsuario
