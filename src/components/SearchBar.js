import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';

const SearchBar = ({title, allItems, setAct, setCantFound, item_prop}) => {
    const [searchVal, setSearchVal] = useState('');
    
    const handleSearch = (param) => {
        const items_arr = allItems;
        const new_arr = items_arr.filter(item => item[`${param}`].toLowerCase().search(searchVal.toLocaleLowerCase()) > -1);
        if(!new_arr.length) setCantFound(true);
        else setCantFound(false);
        setAct(new_arr);
    }
    
    return(
        <div className="flex flex-col items-center justify-between w-11/12 max-w-5xl  p-4 border-b-2 border-gray-500 md:flex-row">
            <h1 className="text-gray-700 text-center text-xl font-regular mb-4 md:text-3xl md:mb-0">{title}</h1>
            <div className="flex items-center justify-center">
                <input
                    type="text"
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                    name="search"
                    placeholder="Digite algo"
                    className="w-44 h-8 border border-gray-400 rounded-none rounded-l-xl pl-6 outline-none md:w-64 md:h-10"
                />
                <button onClick={() => handleSearch(item_prop)} className="w-16 h-8 flex justify-center items-center bg-indigo-500 rounded-r-xl text-gray-50 text-lg md:w-20 md:h-10 md:text-xl" ><FaSearch /></button>
            </div>
        </div>
    )
}

export default SearchBar;