import React, { useState } from "react";

const Search = (props) => {
const [input, setInputState] = useState('');

const handleChange = (e) => {
    setInputState(e.target.value)
}

const searchValue = (e) => {
    e.preventDefault();
    props.search(input);
}
  

return (
      <div className='header'>
        <h1 className='pageTitle'>Search a Movie</h1>
      <form className="search">
          <input 
           type="text"
           value={input}
           onChange={handleChange}
           placeholder="Enter Movie title" 
           />
          <input 
          type="submit" 
          value="Search" 
          onClick={searchValue} />
      </form>
      </div>
    )
  
}
  
  export default Search;