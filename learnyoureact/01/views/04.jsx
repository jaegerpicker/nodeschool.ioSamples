var React = require('react');

class TodoBox extends React.Component {
  render() {
    return(
    <div className="todoBox">
      <h1>Todos</h1>
      <TodoList className="todoList"/>
      <TodoForm className="todoForm"/>
    </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return(
      <div className={this.props.className}>
      <table style={{border: "2px solid black"}}>
        <tbody>
          <Todo title={6}>Milk</Todo>
          <Todo title={7}>13:00</Todo>
        </tbody>
      </table>
      </div>
    );
  }
}

var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.number.isRequired
  },
  render: function() {
    var titleOutput = "";
    if(this.props.title == 6) {
      titleOutput = "Shopping";
    } else if(this.props.title == 7) {
      titleOutput = "Hair cut";
    }
    return (

      <tr>
        <td style={{border: "1px solid black"}}>{titleOutput}</td>
        <td style={{border: "1px solid black"}}>{this.props.children}</td>
      </tr>
    );
  }
});

class TodoForm extends React.Component {
  render() {
    return (
      <div className={this.props.className}>I am a TodoForm.</div>
    );
  }
}

module.exports = TodoBox;
