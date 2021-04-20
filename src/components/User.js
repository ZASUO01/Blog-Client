import {FaClock} from 'react-icons/fa';
import icons_arr from './IconsData';
import spy from '../images/spy.png';

const User = ({user}) => {
    const handlleDate = (date) => {
        const date_arr = date.split('T');
        const date_time = date_arr[0];
        return date_time;
    }
    
    return(
        <div className="w-full max-w-5xl p-4 border border-gray-400 rounded-lg mb-10">
            <div className="w-full flex flex-col items-center justify-between md:flex-row">
                <div className="flex flex-col items-center justify-center mb-6 md:mb-0 md:flex-row">
                    <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center overflow-hidden md:w-16 md:h-16 md:mb-0">
                        <img src={user.icon_id > 10 ? spy : icons_arr[user.icon_id]} alt="user_icon"/>
                    </div>
                    <div className="flex flex-col items-center justify-center md:ml-6 md:items-start">
                        <h1 className="text-indigo-700 font-bold text-md md:text-xl">{user.username}</h1>
                        <h1 className="text-gray-700 text-md font-semibold md:text-xl">{user.email}</h1>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <h1 className="text-md text-gray-700 flex items-center md:text-xl">
                        <FaClock className="mr-6"/> 
                        Usuário criado em: {handlleDate(user.createdAt)}
                    </h1>
                    <h1 className="text-md text-gray-700 flex items-center md:text-xl">
                        <FaClock className="mr-6"/>
                        Ultima edição em: {handlleDate(user.updatedAt)}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default User;