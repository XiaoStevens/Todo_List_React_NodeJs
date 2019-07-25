import React, {Component} from 'react';
import TodoItems from './TodoItems';

class Todos extends Component {

  // markComplete = () => {
  //   console.log('hello')
  // }
  //we have to go back to App.js , so we use this.props.markComplete
  render() {
    
  return this.props.todos.map ((todo) => (  //return may cause return null problem, notice the line you should put.
    <TodoItems key = {todo.id} todo = {todo} markComplete = {this.props.markComplete} delFun = {this.props.delFun}/>
  ))
  }
}

export default Todos;
