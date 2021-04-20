import axios from 'axios';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Login = ({setUser}) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://blog-api-14293.herokuapp.com/users/log-in', {email, password})
        .then((res) => {
            setShowError(false);
            localStorage.setItem('user', JSON.stringify(res.data));
            setUser(res.data.user);
            history.push('/');
        }).catch((err) =>{
            setShowError(true);
        });
    }
    
    return(
        <div className="w-full">
            <div className="w-full flex flex-col items-center justify-center py-10">
                <h1 className="text-3xl text-indigo-900 font-bold md:text-4xl">Faça Log in</h1>
                <form  onSubmit={(e) => handleSubmit(e)} className="mt-10 w-11/12 max-w-xl p-6 border border-gray-400 rounded-lg flex flex-col items-center">
                    {showError && (<p className="text-red-500 text-lg mb-2">Erro: Não foi possivel autenticar</p>)}
                    <div className="w-full flex flex-col items-center justify-center">
                        <input 
                            type="text" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="E-mail" 
                            className="w-full h-12 border border-gray-400 rounded-xl pl-6 text-gray-500 text-lg outline-none"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha"
                            className="w-full h-12 border border-gray-400 rounded-xl pl-6 text-gray-500 text-lg mt-6 outline-none"
                            required
                        />
                        <input 
                            type="submit"
                            value="Enviar"
                            className="outline-none mt-6 w-full h-10 bg-indigo-700 rounded-xl text-xl text-gray-100 cursor-pointer duration-300 hover:bg-indigo-600"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;