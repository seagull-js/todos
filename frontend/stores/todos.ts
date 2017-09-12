import { observable } from 'mobx'
import Todo from '../models/todo'

export default class TodoStore {
  @observable list: Todo[] = []

  constructor() {
    this.addTodo('wake up')
    this.addTodo('go shopping')
    this.addTodo('buy milk')
  }

  addTodo (text: string) {
    this.list.push(new Todo(text))
  }

  deleteTodo (id: string) {
    const index = this.list.findIndex(todo => todo.id === id)
    this.list.splice(index, 1)
  }

  toggleTodo (id: string) {
    const index = this.list.findIndex(todo => todo.id === id)
    this.list[index].checked = !this.list[index].checked
  }
}