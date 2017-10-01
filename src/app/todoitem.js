var React = require('react');
var createReactClass = require('create-react-class');

require('./css/todoItem.css');

// create todoitem component
var TodoItem = createReactClass({    
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="todo-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        )
    },

    // custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }

});


module.exports = TodoItem;