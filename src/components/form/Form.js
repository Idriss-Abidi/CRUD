// import logo from './logo.svg';
// import './App.css';
// import React, {Component} from 'react';

const  CourseForm =(props)=>{

  return (
        <form onSubmit={props.addCourse}>
            <input type="text" placeholder="Course name..." id="course" onChange={props.updateCourse} value={props.current}/>
            <button type="submit" id="btnSub">Add Course</button>
        </form>
  );
}

export default CourseForm;
