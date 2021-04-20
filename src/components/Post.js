import {Link} from 'react-router-dom';
import spy from '../images/spy.png';
import icons_arr from './IconsData';
import default_cover from '../images/default-cover.png'

const Post = ({post, user}) => {
    
    const handleDate = (date) => {
        const date_arr = date.split('T');
        const newDate = date_arr[0];
        return newDate;
    }

    return(
        <div className="w-11/12 max-w-5xl border border-gray-400 rounded-lg mb-20">
            <div className="w-full p-2 border-b flex items-center md:p-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-4 overflow-hidden md:w-16 md:h-16">
                    <img src={user.icon_id > 10 ? spy : icons_arr[user.icon_id]} alt="user-icon"/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-md text-indigo-700 font-bold md:text-xl">{user.username}</p>
                    <p className="text-sm text-gray-700 font-semibold md:text-md">{handleDate(post.createdAt)}</p>
                </div>
            </div>
            <div className="w-full h-44 flex items-center justify-center  bg-gray-800 overflow-hidden md:h-64">
                <img src={post.cover !== 'default' ? post.cover : default_cover} alt="img" className="w-full"/>
            </div>
            <div className="w-full p-6 flex flex-col items-center justify-center">
                <p className="text-center text-lg font-bold text-gray-700 mb-2 md:text-xl md:mb-4">{post.title}</p>
                <p className="text-center text-md font-bold text-gray-500 mb-10 md:text-lg">{post.call}</p>
                <Link to={`/posts/${post._id}`}>
                    <button className="w-32 h-10 bg-indigo-600 rounded-lg text-gray-50 text-lg transform duration-300 hover:scale-110 md:w-44 md:h-12 md:text-xl">Veja</button>
                </Link>
            </div>
        </div>
    )
}

export default Post;