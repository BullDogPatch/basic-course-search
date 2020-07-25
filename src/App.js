import React, { useState, useEffect, useReducer } from 'react';
import Header from './Header';

import CoursesList from './CoursesList';
import Search from './Search';

const courses_data = [
  {
    id: 1,
    title: 'React the best parts(hooks)',
    author: 'Craig Clayton',
    hours_video: 40.5,
    rating: 4.6,
    url: 'https://google.com',
  },
  {
    id: 2,
    title: 'The complete guide to Redux',
    author: 'Craig Clayton',
    hours_video: 35,
    rating: 4.6,
    url: 'https://www.google.com',
  },
  {
    id: 3,
    title: 'Learn how to think like a programmer',
    author: 'Craig Clayton',
    hours_video: 35,
    rating: 4.6,
    url: 'https://www.google.com',
  },
  {
    id: 4,
    title: 'The best way to learn front end web development',
    author: 'Craig Clayton',
    hours_video: 23,
    rating: 3.6,
    url: 'https://www.google.com',
  },
];

const coursesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COURSES':
      return action.payload;
    default:
      throw new Error();
  }
};

const App = () => {
  // const [courses, setCourses] = useState([]);

  // using the useReducer hook function to manage state

  const [courses, dispatchCourses] = useReducer(coursesReducer, []);

  const [searchText, setSearchText] = useState(
    localStorage.getItem('searchText') || '',
  );

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('searchText', searchText);
  }, [searchText]);

  const handleSearch = event => {
    setSearchText(event.target.value);
  };

  const getCoursesAsync = () =>
    new Promise(resolve =>
      setTimeout(() => resolve({ courses: courses_data }), 2000),
    );

  useEffect(() => {
    setIsLoading(true);
    getCoursesAsync().then(result => {
      // setCourses(result.courses);

      // using the useReducer hook to manage state
      dispatchCourses({
        type: 'SET_COURSES',
        payload: result.courses,
      });
      setIsLoading(false);
    });
  }, []);

  const filteredCourses = courses.filter(course => {
    return (
      course.title.toLowerCase().includes(searchText) ||
      course.author.toLowerCase().includes(searchText)
    );
  });
  return (
    <div>
      <Header />
      <Search value={searchText} onSearch={handleSearch} />
      {isLoading ? (
        <p>Loading your data...</p>
      ) : (
        <CoursesList courses={filteredCourses} />
      )}
    </div>
  );
};

export default App;
