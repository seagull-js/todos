// external library imports
import createElement from 'inferno-create-element';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx'
import Todos from '../stores/todos'

// external data that gets passed into this component
export interface IProps {
  todos: Todos
}

// internal 'state' data structure of this component
export interface IState {
  input: string
}

// the (stateful) component for the page with type checking
@connect(['todos'])
export default class InputForm extends Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = { input: '' }
  }

  setInputText = (event) => this.setState({ input: event.target.value })

  invoke = (_event) => {
    this.props.todos.addTodo(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <div className="input-group">
        <input
          className="form-control"
          value={ this.state.input }
          onChange={ this.setInputText }
          placeholder="enter some todo text..."
        />
        <span className="input-group-btn">
          <button className="btn btn-default" onClick={ this.invoke }>add todo</button>
        </span>
      </div>
    )
  }
}