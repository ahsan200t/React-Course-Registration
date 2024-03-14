/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course/Course";

const Courses = ({handleAddCredit}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./Courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="md:grid grid-cols-3 gap-4">
        {
            courses.map(course => <Course
                handleAddCredit={handleAddCredit}
                course={course}
                key={course.id}></Course>)
        }
    </div>
  );
};

export default Courses;
