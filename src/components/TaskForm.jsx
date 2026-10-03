import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoState'

function TaskForm() {
  const [text, setText] = useState('')
  const setTodos = useSetRecoilState(todoListState)

  function handleSubmit(event) {
    event.preventDefault()
    const title = text.trim()
    if (!title) return

    setTodos((todos) => [...todos, { id: crypto.randomUUID(), title, completed: false }])
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="new-task">Nova tarefa</label>
      <input
        id="new-task"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Ex.: separar 20 min para ler"
        maxLength={120}
      />
      <button type="submit" aria-label="Adicionar tarefa" title="Adicionar tarefa">
        <span aria-hidden="true">+</span><span className="add-label">Adicionar</span>
      </button>
    </form>
  )
}

export default TaskForm