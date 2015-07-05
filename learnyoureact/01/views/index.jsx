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
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  propTypes: {
    title: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  handleChange(event) {
    this.setState({checked: event.target.value});
  }

  render() {
    return (
      <tr>
        <td style={{border: "1px solid black"}}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={{border: "1px solid black"}}>{this.props.title}</td>
        <td style={{border: "1px solid black"}}>{this.props.children}</td>
      </tr>
    );
  }
}

class TodoForm extends React.Component {
  render() {
    return(
      <div className={this.props.className}>I am a TodoForm.</div>
    );
  }
}

module.exports = TodoBox;
