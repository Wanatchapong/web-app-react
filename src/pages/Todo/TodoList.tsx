import React from 'react'
import { Todo } from 'api/todo'

interface TodoListProps {
  todos?: Todo[]
}

export default function TodoList(props: TodoListProps): JSX.Element {
  const { todos } = props

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span>{todo.title}</span>
          <span>{todo.status}</span>
        </li>
      ))}
    </ul>
  )
}
