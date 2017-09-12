import Component from 'inferno-component';
import createElement from 'inferno-create-element';
import { connect } from 'inferno-mobx'
import Todos from '../stores/todos'
import InputForm from '../components/input_form'
import TodoItem from '../components/todo_item'

interface IProps {
  todos: Todos
}

// the (stateful) component for the page with type checking
@connect(['todos'])
export default class HelloPage extends Component<IProps, {}> {

  render() {
    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <td>Status</td>
              <td>Text</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.list.map((todo, index) =>
              <TodoItem todo={ todo } />
            )}
          </tbody>
        </table>
        <InputForm />
      </div>
    )
  }
}