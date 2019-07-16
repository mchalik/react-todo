import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [],
            input: ''
        };
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo() {
        event.preventDefault();
        const todoItemsClone = this.state.todoItems.slice().concat(this.state.input);
        console.log('adsdasd', this.state);
        this.setState({todoItems : todoItemsClone});
    }
    changeInput() {
        this.setState({
            input: event.target.value
        });
        // console.log(this.state.input);
    }
    deleteTodo() {

    }
    render() {
        const todoList = this.state.todoItems.map((item, key) => (
            <li key={key}>
                <label><input type="checkbox"/>{item}</label><span className="close" onClick={}>Del</span>
            </li>
        )
    );
    return (
      <div className="App">
          <input type="text" className='input' onChange={this.changeInput.bind(this)} value={this.state.input}/>
          <button type="submit" onClick={this.addTodo}>Ввести</button>
          <ul>{todoList}</ul>
      </div>
    );
  }
}

export default App;
