// RemoveCourse.js
import React, { useState } from 'react';
import axios from 'axios';

const RemoveCourse = () => {
    const [courseId, setCourseId] = useState('');

    const handleRemoveCourse = () => {
        axios.delete(`http://localhost:8080/deleteCourse/${courseId}`)
            .then(response => console.log('Course removed successfully:', response.data))
            .catch(error => console.error('Error removing course:', error));
    };

    return (
        <div>
            <h1>Remove Course</h1>
            <input
                type="text"
                placeholder="Course ID"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
            />
            <button onClick={handleRemoveCourse}>Remove Course</button>
        </div>
    );
};

export default RemoveCourse;
