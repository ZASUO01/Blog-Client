import {useState} from  'react';
import axios from 'axios';
import icons_arr from './IconsData';

const Comment = ({comment, actUser, updateVal, setUpdate}) => {
    const [editing, setEditing] = useState(false);
    const [inputVal, setInputVal] = useState(comment.content)

    const handleDate = (date) => {
        const date_arr = date.split('T');
        const newDate = date_arr[0];
        return newDate;
    }

    const cancelEdit = () => {
        setEditing(false);
        setInputVal(comment.content);
    }

    const handleEdit = () => {
        axios.put(`https://blog-api-14293.herokuapp.com/comments/${comment._id}/update`,
            {content: inputVal},
            {headers:{Authorization: `bearer ${JSON.parse(localStorage.getItem('user')).token}`}}
        ).then((res) => {
            setEditing(false);
            setUpdate(!updateVal);
        }).catch((err) => {
            setInputVal('Informações inválidas. Digite novamente');
        });
    }
    
    const handleDelete = () => {
        axios.delete(`https://blog-api-14293.herokuapp.com/comments/${comment._id}/delete`,
            {headers:{Authorization: `bearer ${JSON.parse(localStorage.getItem('user')).token}`}} 
        ).then((res) => {
            setUpdate(!updateVal);
        })
    }

    return(
        <div className="w-full border border-gray-400 rounded-lg mb-6 relative">
            {(actUser && actUser._id === comment.user._id) && 
                (<div>
                    <button className="absolute top-2 right-16 w-12 h-6 bg-indigo-400 rounded text-gray-50 text-sm transform duration-300 hover:scale-105 md:w-14 md:h-8 md:right-20" onClick={() => setEditing(true)}>
                        Editar
                    </button>
                    <button className="absolute top-2 right-2 w-12 h-6 bg-red-400 rounded text-gray-50 text-sm transform duration-300 hover:scale-105  md:w-14 md:h-8" onClick={handleDelete}>
                        Excluir
                    </button>
                </div>)
            }
            <div className="w-full flex items-center justify-start p-4 border-b border-gray-300">
                <div className="w-8 h-8 rounded-full overflow-hidden md:w-14 md:h-14">
                    <img src={icons_arr[comment.user.icon_id]} alt="user-icon"/>
                </div>
                <div className="ml-4">
                    <p className=" text-indigo-700 text-sm font-bold md:text-xl">{comment.user.username}</p>
                    <p className="text-sm text-gray-700 font-light md:text-md md:font-semibold">{handleDate(comment.createdAt)}</p>
                </div>
            </div>
            <div className="w-full py-4 px-4 md:px-10">
                {editing ? 
                    (<div className="flex items-center justify-start">
                        <input 
                            type="text"
                            name="content"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            onFocus={() => setInputVal('')}
                            className="w-4/5 max-w-5xl h-10 border border-gray-400 rounded-l-lg px-6 text-lg text-gray-600"
                            minLength="1"
                        />
                        <button className="rounded-none w-20 h-10 bg-gray-300 text-gray-600 text-md border border-gray-400" onClick={cancelEdit}>
                            Cancelar
                        </button>
                        <button className="rounded-r-lg w-20 h-10 bg-gray-300 border border-gray-400 text-gray-600 text-md" onClick={handleEdit}>
                            Salvar
                        </button>
                    </div>)
                : 
                    (<span className="text-gray-600 text-md md:text-lg">{comment.content}</span>)
                }
                
            </div>
        </div>
    )
}

export default Comment;