import React, {Component, Fragment} from 'react'
class List extends Component{
    state={
        isEdit:false
    }
    renderCourseItem=()=>{
        return(
            <li><span>{this.props.course.name}</span>
            <button onClick={() =>{this.ToggleState()}}>Edit Course</button>
            <button onClick={() =>{this.props.delete(this.props.index)}}>Delete Course</button></li>
        );
    }
    handleUpdateCourse=(e)=>{
        e.preventDefault();
        this.props.edit(this.props.index, this.input.value);
        this.ToggleState();
    }
    renderUpdateForm=()=>{
        return(
            <form onSubmit={this.handleUpdateCourse}>
            <input type='text' defaultValue={this.props.course.name} id='updatedName' ref={(v)=>{this.input=v}}/>
            <button onClick={() =>{this.props.update(this.props.index)}}>Save Course</button>
            </form>
        );
    }
    ToggleState=()=>{
        let {isEdit}=this.state;
        this.setState({
            isEdit: !isEdit
        })
    }
    render(){
    return(
        <Fragment>
            {this.state.isEdit ? this.renderUpdateForm() : this.renderCourseItem()}
        </Fragment>
    );}
}
export default List;