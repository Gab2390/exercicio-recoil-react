import { useRecoilState, useRecoilValue } from 'recoil'
import { todoFilterState, todoListState } from '../atoms/todoState'

const filters = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendentes' },
  { value: 'completed', label: 'Concluídas' },
]

function TaskFilter() {
  const [activeFilter, setActiveFilter] = useRecoilState(todoFilterState)
  const todos = useRecoilValue(todoListState)

  return (
    <div className="filter-row">
      <div className="filter-tabs" role="tablist" aria-label="Filtrar tarefas">
        {filters.map((filter) => (
          <button
            key={filter.value}
            id={`filter-${filter.value}`}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter.value}
            className={activeFilter === filter.value ? 'filter-tab is-active' : 'filter-tab'}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <span className="task-count">{todos.length} {todos.length === 1 ? 'tarefa' : 'tarefas'}</span>
    </div>
  )
}

export default TaskFilter