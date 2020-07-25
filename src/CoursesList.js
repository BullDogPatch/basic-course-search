import React from 'react';

const CoursesList = ({ courses }) => {
  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <span>
            <a href={course.url}>
              <h4>{course.title}</h4>
            </a>
          </span>
          <span>
            By <strong>{course.author} </strong>
          </span>
          <span>| video Hours: {course.hours_video} </span>
          <span>| Rating: {course.rating}</span>
        </div>
      ))}
    </div>
  );
};
// {courses.map((course) => (
//     <div key={course.id}>
//       <span>
//         <a href={course.url}>
//           <h4>{course.title}</h4>
//         </a>
//       </span>
//       <span>
//         By <strong>{course.author} </strong>
//       </span>
//       <span>| video Hours: {course.hours_video} </span>
//       <span>| Rating: {course.rating}</span>
//     </div>

export default CoursesList;
