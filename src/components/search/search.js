const { useState } = require('react');
const { AsyncPaginate } = require("react-select-async-paginate");

const Search = ({onSearchChange}) => {
    const[search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        
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
        onChange={h