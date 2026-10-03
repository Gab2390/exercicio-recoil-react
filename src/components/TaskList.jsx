import { useRecoilValue, useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoState'
import { filteredTodoListState } from '../selectors/todoSelector'

function TaskList() {
  const todos = useRecoilValue(filteredTodoListState)
  const setTodos = useSetRecoilState(todoListState)

  function toggleTodo(todoId) {
    setTodos((currentTodos) => currentTodos.map((todo) => (
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )))
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== todoId))
  }

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-mark" aria-hidden="true">○</span>
        <p>Nenhum passo por aqui.</p>
        <span>Adicione uma tarefa ou escolha outro filtro.</span>
      </div>
    )
  }

  return (
    <ul className="task-list">
      {todos.map((todo) => (
        <li className={todo.completed ? 'task-item is-complete' : 'task-item'} key={todo.id}>
          <label className="task-check-wrap">
            <input
              className="task-check"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              aria-label={`${todo.completed ? 'Reabrir' : 'Concluir'}: ${todo.title}`}
            />
            <span className="custom-check" aria-hidden="true" />
          </label>
          <span className="task-title">{todo.title}</span>
          <button
            className="delete-task"
            type="button"
            onClick={() => deleteTodo(todo.id)}
            aria-label={`Excluir: ${todo.title}`}
            title="Excluir tarefa"
          >
            <span aria-hidden="true">×</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList