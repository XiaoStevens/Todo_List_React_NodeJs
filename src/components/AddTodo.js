import React, {Component} from 'react';

class AddTodo extends Component {
  state = {
    title : ''
  }
  setValue = (e) => {
    this.setState({title: e.target.value}) //[e.target.name]只要有name就对应到他的value
  }
  submitTodo = (e) => {
    e.preventDefault();//check this in javascript 
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }
  render() {
    return (
      <form onSubmit = {this.submitTodo}>
        <input 
          type = "text"
          name ="title" //must be same with the name in state
          placeholder ="Add todo..."
          className ="inputBox"
          value = {this.state.title}
          onChange = {this.setValue}/>
        <input 
          type = "submit"
          value = "submit"
          className = "btn"
        />
      </form>
    )

  }
}

export default AddTodo;
