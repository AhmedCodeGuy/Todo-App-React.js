var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

require('./css/index.css');

import {Router, Route, browserHistory, Link} from 'react-router';


//  Module requires
var TodoItem = require('./todoitem');
var AddItem = require('./additem');
var About = require('./about');

var App = createReactClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    }
});

// create todo component
var TodoComponent = createReactClass({
    
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'code']
        }
    }, // getInitialState


    render: function(){
        var todos = this.state.todos;

        todos = todos.map(function(item, index){
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));

        return(
            <div id="todo-list">
                <Link to={'/about'}>About</Link>
                <p>My first React App</p>
                <ul>
                    {todos}
                </ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    }, // render

    // custom functions

    onAdd: function(item){
        var updatedTodos = this.state.todos;

        updatedTodos.push(item);

        this.setState({
            todos: updatedTodos
        });
    },

    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });

        this.setState({
            todos: updatedTodos
        }); // onDelete
    },

    // lifecycle functions
    componentWillMount: function(){
        console.log('componentWillMount');
        // This one fires before the render method
    },

    componentDidMount: function(){
        console.log('componentDidMount');
        // This one fires after the render method
        // Good for grapping any external data
    },

    componentWillUpdate: function(){
        console.log('componentWillUpdate');
        // This one fires when we make a change
    }
}); // TodoComponent



// put component into html page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));