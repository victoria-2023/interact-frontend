// SearchCourses.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchCourses = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        axios.get(`http://localhost:8080/searchCourses?query=${searchQuery}`)
            .then(response => setSearchResults(response.data))
            .catch(error => console.error('Error searching courses:', error));
    };

    return (
        <div>
            <h1>Search Courses</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {searchResults.map(course => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchCourses;
