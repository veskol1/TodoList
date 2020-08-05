import React, {Component} from 'react';
import './App.css';
import Item from './Item/Item'
import Input from "./Input/Input";
import ToDoHeader from "./ToDoHeader/ToDoHeader";

class App extends Component{
    inputRef = React.createRef();

    state = {
        items : [],
        input: ''
    };


changeInputHandler = (event) => {
      this.setState({
            input : event.target.value
      });
    };


    addItemHandler = () => {
        const newToDo = this.state.input;   //check this issue
        if( this.state.input !== '')
            this.setState({
                items: this.state.items.concat(newToDo),
                input: ''
            });
        this.inputRef.current.value = '';
    };

    deleteToDoHandler = (index) => {
        const toDoItems = [...this.state.items];

        toDoItems.splice(index,1);
        this.setState({
            items: toDoItems
        });

    };


    render() {
    let todoItemsList = null;

        todoItemsList = (
        this.state.items.map( (item,index) =>{
            return (
                <Item
                    todo={item}
                    deleteToDo={this.deleteToDoHandler.bind(this,index)}
                    key={index}>
                </Item>)
        })
    );

    return (
        <div className="App">
            <ToDoHeader addItem={this.addItemHandler}/>
            <Input doChange={(event) =>this.changeInputHandler(event) } inputRef={this.inputRef}/>
            {todoItemsList}
        </div>
    );
}
}

export default App;
