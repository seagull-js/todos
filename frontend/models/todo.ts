// the reactive state management library of choice
import { observable } from 'mobx'

// this is a single todo item
export default class Todo {

  // id will never change after creation
  id: string

  // checked will change on user interactions
  @observable checked: boolean = false

  // text will never change after creation
  text: string

  // create a new instance from a given text and create a uuid
  constructor (text: string) {
    this.text = text
    this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)
      return v.toString(16)
    })
  }
}