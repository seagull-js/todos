import * as React from "react"
import { Page } from '@seagull/core'
import Todos from '../stores/todos'
import InputForm from '../components/input_form'
import TodoItem from '../components/todo_item'
import PageWrapper from '../components/pagewrapper'

interface IProps {
  todos: Todos
}

// the (stateful) component for the page with type checking
export default class HelloPage extends Page<IProps, {}> {
  
  path = "/"

  componentDidMount(){
    console.log('jaa')
    this.props.todos.addTodo('nujaaa')
  }

  render() {
    return (
      <PageWrapper>
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
      </PageWrapper>
    )
  }
}