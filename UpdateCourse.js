// UpdateCourse.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateCourse = () => {
    const [courseId, setCourseId] = useState('');
    const [updatedName, setUpdatedName] = useState('');

    const handleUpdateCourse = () => {
        axios.put(`http://localhost:8080/updateCourse/${courseId}`, { name: updatedName })
            .then(response => console.log('Course updated successfully:', response.data))
            .catch(error => console.error('Error updating course:', error));
    };

    return (
        <div>
            <h1>Update Course</h1>
            <input
                type="text"
                placeholder="Course ID"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Updated Course Name"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
            />
            <button onClick={handleUpdateCourse}>Update Course</button>
        </div>
    );
};

export default UpdateCourse;
