import React, {Component} from 'react';
import {BrowserRouter as Router, Route}  from 'react-router-dom'; // we imported BrowserRouter and Route
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  state = {
    todos : []
  }

  // componentDidMount () {
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(
  //     res => console.log(res.data)
  //   )
  // }
  async componentDidMount() {
    let res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    this.setState({todos: res.data});
  }

  //toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
     })
    })
  }

  //delete todo
  delFun = (id) => {
    //this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    );
  }
  // add Todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   //title: title, //the key and value are the same
    //   title,
    //   completed: false
    axios.post('https://jsonplaceholder.typicode.com/todos', 
    {title,
    completed: false}).then (res => this.setState({todos: [...this.state.todos, res.data]}))
    
  }
  render () {
    // console.log(this.state.todos);
  return (
    <Router> 
      <div className="App">
        <div className = "Container"> 
        
          <Route exact path = "/" render = {props => (
            <React.Fragment>
              <Header />
              <AddTodo addTodo = {this.addTodo}/>
              <Todos todos = {this.state.todos} markComplete = {this.markComplete} delFun= {this.delFun}/>
            </React.Fragment>
          )}/>
          <Route path = "/about" render = {props => (
            <React.Fragment>
              <Header />
              <About />
            </React.Fragment>
          )}/>
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
