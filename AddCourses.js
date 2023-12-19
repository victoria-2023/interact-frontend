// AddCourse.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
    const [courseName, setCourseName] = useState('');

    const handleAddCourse = () => {
        axios.post('http://localhost:8080/addCourse', { name: courseName })
            .then(response => console.log('Course added successfully:', response.data))
            .catch(error => console.error('Error adding course:', error));
    };

    return (
        <div>
            <h1>Add Course</h1>
            <input
                type="text"
                placeholder="Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
            />
            <button onClick={handleAddCourse}>Add Course</button>
        </div>
    );
};

export default AddCourse;
