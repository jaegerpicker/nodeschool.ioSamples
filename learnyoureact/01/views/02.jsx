var React = require('react');

var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList className='todoList'/>
        <TodoForm className='todoForm'/>
      </div>
    );
  }
});

class TodoList extends React.Component {
  render() {
    return (<div className={this.props.className}>
            I am a TodoList.
          </div>);
  }
}

var TodoForm = React.createClass({
  render: function() {
    return ( <div className={this.props.className}>
            I am a TodoForm.
          </div>);
  }
});

module.exports = TodoBox;
