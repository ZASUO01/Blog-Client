import {useState, useEffect} from 'react';
import axios from 'axios';
import Post from '../components/Post';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import CantFound from '../components/CantFound';

const Posts = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [actPosts, setActPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cantFound, setCantFound] = useState(false);

    useEffect(() => {
        axios.get('https://blog-api-14293.herokuapp.com/posts')
        .then((res) => {
        setAllPosts(res.data);
        setActPosts(res.data);
        setIsLoading(false);
    })
    }, [])
    
    return(
        <div className="w-full py-6 px-2 flex flex-col items-center justify-center md:p-6">
            <SearchBar 
                title="Todas as postagens"
                allItems={allPosts}
                setAct={setActPosts}
                setCantFound={setCantFound}
                item_prop="title"
            />
            <div className="w-full flex flex-col items-center justify-center py-10">
                {
                    isLoading?
                    (<Loading />)
                    :
                    cantFound ?
                    (<CantFound 
                        title='Nenhum post foi encontrado'
                        btn='Veja todos os posts'
                        setAct={setActPosts}
                        setCantFound={setCantFound}
                        allItems={allPosts}
                    />)
                    :
                    actPosts.map(post => 
                        <Post post={post} user={post.user} key={post._id}/>    
                    )
                }
            </div>
        </div>
    )
}

export default Posts;