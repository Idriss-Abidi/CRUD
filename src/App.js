// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react';
import CourseForm from './components/form/Form';
import ListForm from './components/list/List';

class  App extends Component{
  state = {
    course:[
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'JS'}
    ],
    current:''
  }
  //updadte
  updateCourse=(e)=>{
    this.setState({
      current: e.target.value
    })
  }
  //add
  addCourse=(e)=>{
    e.preventDefault();
    let courses = this.state.course;
    let current=this.state.current;
    courses.push({name:current});
    this.setState({
      course: courses, 
      current:''
    })
  }
  //delete 
  deleteCourse=(index)=>{
    // e.preventDefault();
    let courses = this.state.course;
    courses.splice(index, 1);
    this.setState({
      course:courses
    })
  }
  //edit
  editCourse=(index, value)=>{
    let courses = this.state.course;
    let course=courses[index];
    course['name']=value;
    this.setState({
      course:courses
    })
  }
  handleChange=(e)=>{

  }
  render(){
    const courses=this.state.course;
    const courseList= courses.map((course, index)=>{
      return(
        <ListForm course={course} index={index} key={index} update={this.handleChange} delete={this.deleteCourse} edit={this.editCourse}/>
      )
    })
  return (
    <div className="App">
      <CourseForm current={this.state.current}  updateCourse={this.updateCourse} addCourse={this.addCourse} />
      <ul>{courseList}</ul>
      
    </div>
  );}
}

export default App;
