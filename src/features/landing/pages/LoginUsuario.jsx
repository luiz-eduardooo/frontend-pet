import { useState } from 'react'
import { useAuth } from '../../../shared/contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { loginUsuario } from '../../usuarios/services/usuarioService';
import { Input } from '../../../shared/components/Input';
import { Button } from '../../../shared/components/Button';

const LoginUsuario = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { entrar } = useAuth();
    const navigate = useNavigate();

    const handlerLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUsuario({ email, password });
            entrar({ ...data.user, token: data.token, tipo: 'usuario' })
            navigate('/')
        }
        catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='min-h-screen flex items-center justify-center bg-zinc-50 px-4'>
            <div className='w-full bg-white rounded-3xl border border-zinc-200 shadow-lg overflow-hidden' style={{ maxWidth: 420 }}>
                <div className='p-8'>  

                    <div className='text-center mb-7'>
                        <h1 className='text-xl font-bold text-zinc-900'>Bem-vindo de volta</h1>
                        <p className='text-sm text-zinc-500 mt-1'>Entre na sua conta para continuar</p>
                    </div>

                    <form onSubmit={handlerLogin}>
                        <div className='space-y-4'>
                            <Input
                                label="E-mail"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                label="Senha"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='mt-6'>
                            <Button full variante='primary'>Entrar</Button>
                        </div>
                    </form>

                    <div className='text-center mt-6 ...'>
                        <p>Não tem conta? <Link className='text-primary-600 font-medium'>Cadastre-se</Link></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginUsuario
