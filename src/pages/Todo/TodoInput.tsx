import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'

import { useAddTodo } from 'api/todo'

export default function TodoInput(): JSX.Element {
  const [title, setTitle] = useState('')

  const addTodoMutation = useAddTodo()

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
  }

  const handleClickAdd = (): void => {
    toast.promise(
      addTodoMutation.mutateAsync({
        title,
        status: 'TODO',
      }),
      {
        loading: 'Loading...',
        success: () => {
          setTitle('')
          return 'Add todo successful'
        },
        error: 'Add todo failed',
      }
    )
  }

  return (
    <div className="todo-input">
      <label htmlFor="add-input">New Todo:</label>
      <input id="add-input" value={title} onChange={handleTitleChange} />
      <button onClick={handleClickAdd}>Add</button>
    </div>
  )
}
