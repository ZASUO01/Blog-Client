import default_cover from '../images/default-cover.png'

const preStyle = {
    whiteSpace: "pre-wrap",
    fontFamily: "Poppins"
}

const PostDetailed = ({post}) => {
    return(
        <div className="w-full border border-gray-400 rounded-lg overflow-hidden">
            <div className="w-full p-4 flex flex-col items-center justify-center border-b border-gray-400">
                <h1 className="text-indigo-900 font-bold text-lg md:text-2xl">{post.title}</h1>
                <p className="text-gray-700 text-md md:text-lg">{post.user.username}</p>
            </div>
            <div className="w-full py-6 px-4 flex items-center justify-center md:px-10">
                <pre style={preStyle} className="text-gray-500 text-md w-full md:text-xl">{post.content}</pre>
            </div>
            <div className="w-full h-44 flex items-center justify-center bg-gray-900 overflow-hidden md:h-72">
                <img src={post.cover !== 'default' ? post.cover : default_cover} alt="post-cover" className="w-full"/>
            </div>
        </div>
    )
}


export default PostDetailed;