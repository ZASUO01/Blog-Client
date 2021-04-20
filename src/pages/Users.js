import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import CantFound from '../components/CantFound';
import User from '../components/User';

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [actUsers, setActUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cantFound, setCantFound] = useState(false);
    
    useEffect(() => {
        axios.get('https://blog-api-14293.herokuapp.com/users')
        .then((res) => {
            setAllUsers(res.data);
            setActUsers(res.data);
            setIsLoading(false);
        });
    }, []);

    return(
        <div className="w-full p-6 flex flex-col items-center justify-center">
            <SearchBar 
                title="Veja os usuários cadastrados"
                allItems={allUsers}
                setAct={setActUsers}
                setCantFound={setCantFound}
                item_prop="username"
            />
            <div className="w-full flex flex-col items-center justify-center py-10">
                {
                    isLoading?
                    (<Loading />)
                    :
                    cantFound?
                    <CantFound 
                        title='Nenhum usuário foi encontrado'
                        btn='Veja todos os usuários'
                        setAct={setActUsers}
                        setCantFound={setCantFound}
                        allItems={allUsers}
                    />
                    :
                    actUsers.map(user => 
                        <User user={user} key={user._id}/>    
                    )
                }
            </div>
        </div>
    )
}

export default Users;