import * as React from "react"
import { Page } from '@seagull-js/seagull'
import { inject, observer } from 'mobx-react'
import Todos from '../stores/todos'
import InputForm from '../components/input_form'
import TodoItem from '../components/todo_item'

interface IProps {
  todos: Todos
}

// the (stateful) component for the page with type checking
@inject('todos') @observer
export default class HelloPage extends Page<IProps, {}> {
  
  path = "/"

  render() {
    return (
      <div>
        <h3>A second 'to do' list.</h3>
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
              <TodoItem todo={ todo } key={ todo.id } />
            )}
          </tbody>
        </table>
        <InputForm />
      </div>
    )
  }
}