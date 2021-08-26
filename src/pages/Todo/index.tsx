import React from 'react'
import { useFetchTodos } from 'api/todo'
import './Todo.scss'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

export default function Todo(): JSX.Element {
  const { isLoading, data: todos, error } = useFetchTodos()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h3>Todo List</h3>
      <TodoInput />
      <hr />
      <TodoList todos={todos} />
    </div>
  )
}
