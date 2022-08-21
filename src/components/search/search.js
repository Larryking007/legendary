const { useState } = require('react');
const { AsyncPaginate } = require("react-select-async-paginate");

const Search = ({onSearchChange}) => {
    const[search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch('/geo/cities', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    
    const handleOnChange = (searchData) =>  {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate 
        placeholder="Search for cities"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        />
    )
}

export default Search;