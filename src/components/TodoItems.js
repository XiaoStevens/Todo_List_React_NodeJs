import React, {Component} from 'react';

class TodoItem extends Component {
  getStyle = () => {
   return {
     background: '#f4f4f4',
     textDecoration: this.props.todo.completed ? 'line-through' : 'none',
     padding: '10px',
     borderBottom: '1px #ccc dotted'
   }
  }

  // add a function and make it work, you have to use .bind(this) in the event, or you haev to use a arrow function
//   markComplete = () =>  {
// console.log(this.props.todo.title)

//   }
  //however,we can't modify the data here, we have to go back
  //so we use this.props.markComplete to add a function to the props

  render() {
     const { id, title } = this.props.todo; //this is destructure
    return (

      <div style = {this.getStyle()}>
        <p>
          <input type = 'checkbox' onChange = {this.props.markComplete.bind(this, id)}/> 
          {/* use onChange to add an event */} {' '}
        {title}
        {' '}
        <button style = {btnStyle} onClick = {this.props.delFun.bind(this, id)}>x</button>
        </p>
      </div>
    );
  }


}

const btnStyle = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 9px',
  cursor: 'PointerEvent', //光标
  float: 'right'
}

export default TodoItem;
