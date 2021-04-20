import {FaFrown} from 'react-icons/fa';

const CantFound = ({title, btn, setAct, setCantFound, allItems}) => {
    const resetSearch = () => {
        setAct(allItems);
        setCantFound(false);
    }
    
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-gray-700 text-2xl font-semibold flex items-center">
                {title}
                <FaFrown className="ml-2"/>
            </h1>
            <button className="mt-4 w-44 h-10 bg-indigo-600 rounded-lg text-gray-50 text-md" onClick={resetSearch}>
                {btn}
            </button>
        </div>
    )
}

export default CantFound;