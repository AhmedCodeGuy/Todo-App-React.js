var React = require('react');
var createReactClass = require('create-react-class');
import {Link} from 'react-router';

var About = createReactClass({
    render: function(){
        return (
            <div>
                <Link to={'/'}>Home</Link>
                <h2>About Me</h2>
            </div>
        );
    }
});

module.exports = About;