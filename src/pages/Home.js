import {FaAt} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import icons_arr from '../components/IconsData';
import SocialBar from '../components/SocialBar';
import spy from '../images/spy.png';
import axios from 'axios';

const Home = ({user, setUser}) => {
    const handlleDelete = () => {
        axios.delete(`https://blog-api-14293.herokuapp.com/users/${user._id}/delete`,
            {headers:{Authorization: `bearer ${JSON.parse(localStorage.getItem('user')).token}`}}
        ).then((res) => {
            localStorage.removeItem('user');
            setUser(null);
        });
    }
    
    return(
        <div className="w-full py-6 flex flex-col items-center justify-center">
            <div className="w-full p-6 flex items-center justify-center">
                <h1 className="text-2xl text-gray-700 font-bold text-center md:text-3xl">Seja bem-vindo ao blog</h1>
            </div>
            <div className="w-full py-20 bg-indigo-900 flex flex-col items-center justify-center px-6 rounded-bl-3xl rounded-tr-3xl">
                {user?
                (<div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full max-w-4xl flex flex-col items-center justify-between bg-indigo-400 rounded-lg py-4 px-2 mb-6 md:px-10 md:flex-row">
                        <div className="flex items-center flex-col mb-6 md:mb-0 md:flex-row">
                            <div className="w-16 h-16 rounded-full mb-2 md:mb-0 md:mr-4 md:w-20 md:h-20">
                                <img src={user.icon_id > 10 ? spy : icons_arr[user.icon_id]} alt="user-icon"/>
                            </div>
                            <h1 className="flex items-center text-gray-700 text-lg font-semibold md:text-xl">
                                Logado como: 
                                <p className="ml-2 text-indigo-700">{user.username}</p>
                            </h1>
                        </div>
                        <div className="flex items-center justify-center">
                            <button 
                                className="w-32 h-10 bg-gray-700 rounded-lg text-gray-100 text-lg font-semibold transform duration-300 hover:scale-110"
                                onClick={handlleDelete}
                                >
                                    Deletar conta
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center md:flex-row">
                        <Link to="/posts" >
                            <button className="w-44 h-12 bg-indigo-300 rounded-lg text-gray-800 text-lg font-semibold mb-6 transform duration-300 hover:scale-110 md:mr-10 md:mb-0">
                                Confira os posts
                            </button>
                        </Link>
                        <Link to="/users">
                            <button className="w-44 h-12 bg-indigo-300 rounded-lg text-gray-800 text-md font-semibold transform duration-300 hover:scale-110">
                                Usuários cadastrados
                            </button>
                        </Link>
                    </div>
                </div>)
                :
                (<div>
                    <h1 className="text-gray-50 text-lg font-semibold flex flex-col text-center items-center mb-6 md:text-2xl md:flex-row">
                        <FaAt className="mb-2 md:mb-0 md:mr-2"/>
                        Seja autenticado para aproveitar todos os recursos.
                    </h1>
                    <div className="w-full flex flex-col items-center justify-center md:flex-row">
                        <Link to="/log-in">
                            <button className="w-44 h-12 bg-green-600 rounded-lg text-gray-50 text-xl  mb-6 transform duration-300 hover:scale-110 md:mr-10 md:mb-0">
                                Faça login
                            </button>
                        </Link>
                        <Link to="/sign-up">
                            <button className="w-44 h-12 bg-indigo-500 rounded-lg text-indigo-200 text-xl transform duration-300 hover:scale-110">
                                Crie uma conta
                            </button>
                        </Link>
                    </div>
                </div>)
                }
            </div>
            <SocialBar />
        </div>
    )
}

export default Home;