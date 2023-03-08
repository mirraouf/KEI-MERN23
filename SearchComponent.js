import { useState } from "react";

function SearchComponent({ onSearchSubmit }) {

    const [searchWord, setSearchWord] = useState('');
    // const handleClick=()=>{
    //     onSearchSubmit('Salaam');
    // };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(searchWord);
    };

    const handleInputChange = (e) => {
        setSearchWord(e.target.value);
    };

    return (
        // <div><input />
        // <button onClick={handleClick}>Search</button>
        // </div>
        <form onSubmit={handleFormSubmit}>
            <input value={searchWord} onChange={handleInputChange} />
        </form>
    );

}

export default SearchComponent;