import {useState} from 'react';
import axios  from 'axios';
import {useHistory} from 'react-router-dom';
import icons_arr from '../components/IconsData';

const SignUp = ({setUser}) => {
    const history = useHistory(); 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [icon_id, setIconId] = useState(0);
    const [isSelected, setIsSelected] = useState(false);

    const handlleSelectIcon = (e, index) => {
        setIconId(index);
        setIsSelected(true);
    }

    const cancelSelected = (e) => {
        e.preventDefault();
        setIsSelected(false);
    }

   
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://blog-api-14293.herokuapp.com/users/sign-up', {username, email, password, icon_id})
        .then((res) => {
            setShowError(false);
            localStorage.setItem('user', JSON.stringify(res.data));
            setUser(res.data.user);
            history.push('/');
        }).catch((err) => {
            setShowError(true);
        });
    }
    
    return(
        <div className="w-full flex flex-col items-center justify-center py-10">
            <h1 className="text-3xl text-gray-700 font-bold md:text-4xl">Cadastre-se</h1>
            <form  onSubmit={(e) => handleSubmit(e)} className="mt-10 w-11/12 max-w-xl p-6 border border-gray-400 rounded-lg flex flex-col items-center">
                    {showError && (<p className="text-red-500 text-lg mb-2">Erro: Não foi possivel criar o usuário</p>)}
                    <div className="w-full flex flex-col items-center justify-center">
                        <input 
                            type="text" 
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder="Nome de Usuário" 
                            className="w-full h-12 border border-gray-400 rounded-xl pl-6 text-gray-500 text-lg outline-none mb-6"
                            required
                        />
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
                        <p className="mt-6 text-gray-500 text-md text-center font-semibold md:text-lg">Selecione um ícone de usuário</p>
                        {isSelected ?
                        (<div className="w-full p-4 border border-gray-400 mt-2 rounded-lg flex items-center justify-center">
                            <div className="w-24 h-24 justify-self-center bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                                <img src={icons_arr[icon_id]} alt="icon-selected"/>
                            </div>
                            <button 
                                className="justify-self-center w-20 h-10 bg-gray-300 border border-gray-400 rounded-lg ml-4 text-gray-700 text-md font-semibold transform duration-300 hover:scale-110" 
                                onClick={(e) => cancelSelected(e)}
                            >
                                Cancelar
                            </button>
                        </div>)  
                        :
                        (<div className="w-full p-4 border border-gray-400 mt-2 rounded-lg grid grid-cols-3 gap-y-4 md:grid-cols-4">
                            {icons_arr.map(icon => 
                                (<div 
                                    className="w-10 justify-self-center cursor-pointer rounded-lg transform duration-300 hover:scale-110 md:w-12" 
                                    key={icons_arr.indexOf(icon)}
                                    onClick={(e) => handlleSelectIcon(e, icons_arr.indexOf(icon))}
                                    isselected={-1}
                                    >
                                        <img src={icon} alt="user-icon"/>
                                </div>)
                            )}
                        </div>)
                        }
                        <input 
                            type="submit"
                            value="Enviar"
                            className="outline-none mt-6 w-full h-10 bg-gray-700 rounded-xl text-xl text-gray-100 cursor-pointer duration-300 hover:bg-indigo-600"
                        />
                    </div>
                </form>
            </div>
    )
}

export default SignUp;