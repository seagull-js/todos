import * as React from "react"
import { inject, observer } from 'mobx-react'
import Todo from '../models/todo'
import Todos from '../stores/todos'

interface IProps {
  todo: Todo,
  todos?: Todos
}

@inject('todos') @observer
export default class TodoItem extends React.Component<IProps, {}> {
  render() {
    return (
      <tr>

      {/* column 1: the checkbox for the 'checked' state */}
      <td>
        <input
          type="checkbox"
          checked={ this.props.todo.checked }
          onClick={ e => this.props.todos!.toggleTodo(this.props.todo.id) }
        />
      </td>

      {/* column 2: the actual text, either striked through or not */}
      <td>{ this.props.todo.checked ? (
        <b>{ this.props.todo.text }</b>
      ) : (
        <span>{ this.props.todo.text }</span>
      )}</td>

      {/* column 3: a delete button for this todo item */}
      <td>
        <button
          onClick={ e => this.props.todos!.deleteTodo(this.props.todo.id) }
          className="btn btn-danger btn-xs"
        >delete</button>
      </td>

    </tr>
    )
  }
}