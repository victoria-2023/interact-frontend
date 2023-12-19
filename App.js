// App.js
import React from 'react';
import CourseList from './components/CourseList';
import SearchCourses from './components/SearchCourses';
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import RemoveCourse from './components/RemoveCourse';

class App extends React.Component {
    render() {
        return (
            <div>
                <SearchCourses/>
                <hr/>
                <AddCourse/>
                <hr/>
                <UpdateCourse/>
                <hr/>
                <RemoveCourse/>
                <hr/>
                <CourseList/>
            </div>
        );
    }
}
