import {Link} from  'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import logo from '../images/logo.png';
import logo_link from '../images/logo-link.png';
import icons_arr from './IconsData';


const logoStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const logoLinkStyle = {
    backgroundImage: `url(${logo_link})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const Header = ({user, setUser}) => {
    
    const handlleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    }
    
    return(
        <div className="w-full flex flex-col bg-gray-300">
            <a href="https://github.com/ZASUO01" target="_blank" rel="noreferrer">
                <div className="hidden absolute z-10  bg-indigo-500 border border-gray-400 left-2 w-28 h-28 top-14  rounded-full transform duration-300 hover:scale-110 cursor-pointer md:block" style={logoLinkStyle}></div>
            </a>
            <header className="w-full bg-indigo-600 p-4">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between md:flex-row">
                    <div className="w-80 h-10 mb-4 md:mb-0" style={logoStyle}></div>
                    {user ?
                    (<div className="flex flex-col items-center md:flex-row">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-700 rounded-full mr-2 overflow-hidden">
                                <img src={icons_arr[user.icon_id]} alt="user-icon"/>
                            </div>
                            <p className="text-gray-200 text-xl font-bold md:mr-6">{user.email}</p>
                        </div>
                        <div className="text-gray-50 text-xl font-semibold hover:underline md:mr-10 flex items-center cursor-pointer" onClick={handlleLogout}>
                            Sair
                            <FaTimes/>
                        </div>
                    </div>)
                    :
                    (<div>
                        <Link to="/log-in" className="text-gray-50 text-lg font-semibold hover:underline mr-10 md:text-xl">
                            Log in
                        </Link>
                        <Link to="/sign-up" className="text-indigo-300 text-lg font-semibold hover:underline md:mr-10 md:text-xl">
                            Cadastrar
                        </Link>
                    </div>)
                    }
                </div>
            </header>
            <nav className="w-full p-2 bg-gray-300 border-b border-gray-400">
                <ul className="w-full flex justify-center items-center md:ml-32 md:justify-start">
                    <Link to="/" className="text-gray-700 text-md font-bold mr-6 hover:underline md:text-lg md:mr-10">Home</Link>
                    <Link to="/posts" className="text-gray-700 text-md font-bold mr-6 hover:underline md:text-lg md:mr-10">Posts</Link>
                    <Link to="/users" className="text-gray-700 text-md font-bold hover:underline md:text-lg">Usuários</Link>

                </ul>
            </nav>
        </div>
    )
}

export default Header;