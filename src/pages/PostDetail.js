import {useState, useEffect} from 'react';
import {useParams, useHistory, Link} from 'react-router-dom';
import {FaComment} from 'react-icons/fa'
import axios from 'axios';
import Loading from '../components/Loading';
import PostDetailed from '../components/PostDetailed';
import Comment from '../components/Comment';

const PostDetail = ({actUser}) => {
    const history = useHistory();
    const {id} = useParams();
    const [actPost, setActPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);    
    const [postContent, setPostContent] = useState('');
    const [updateFetch, setUpdateFetch] = useState(false);

    useEffect(() => {
        axios.get(`https://blog-api-14293.herokuapp.com/posts/${id}`)
        .then((res) => {
            setActPost(res.data);
            setIsLoading(false);
        })
    }, [updateFetch]);
    

    const  handlleComment = (e) => {
        e.preventDefault();
        axios.post(`https://blog-api-14293.herokuapp.com/comments/${id}/create`, 
            {content: postContent},
            {headers:{Authorization: `bearer ${JSON.parse(localStorage.getItem('user')).token}`}}
        ).then((res) => {
            setUpdateFetch(!updateFetch);
            setPostContent('');
        }).catch((err) => {
            history.push('/log-in');
        })
    }

    return(
        <div className="w-full py-20 px-4 flex flex-col items-center justify-center md:px-10">
            {isLoading ?
            (<Loading />)    
            :
            (<>
                <PostDetailed post={actPost.post}/>
                <h1 className="my-10 flex items-center text-gray-700 text-lg font-semibold md:font-light md:text-2xl">
                    <FaComment className="mr-2"/> 
                    Comentários ({actPost.comments.length})
                </h1>
                {actPost.comments.map(comment => (<Comment key={comment._id} comment={comment} actUser={actUser} updateVal={updateFetch} setUpdate={setUpdateFetch}/>))}
                {actUser ? 
                    (<form className="w-full mt-10 flex flex-col items-center" onSubmit={(e) => handlleComment(e)}>
                        <textarea 
                            className="w-full h-32 rounded-lg resize-none outline-none px-6 py-2 border border-gray-400 mb-6 text-gray-700 text-lg md:text-xl md:h-44" 
                            placeholder="Comente algo"
                            value={postContent}
                            onChange={(e)=> setPostContent(e.target.value)}
                            required    
                        ></textarea>
                        <input 
                            type="submit"
                            value="Comentar"
                            className="w-28 h-10 bg-indigo-600 rounded-lg text-gray-50 text-md transform duration-300 hover:scale-110 cursor-pointer md:text-xl md:w-36 md:h-12"
                        />
                    </form>)
                :
                (<div className="mt-10 w-full flex flex-col items-center justify-center">
                    <h1 className="text-lg text-center text-gray-700 font-bold mb-4 md:text-xl">Faça login para poder fazer comentários</h1>
                    <Link to="/log-in" className="text-lg text-indigo-700 hover:underline md:text-xl">Clique aqui</Link>
                </div>)
                }
            </>)
            } 
        </div>
    )
}

export default PostDetail;