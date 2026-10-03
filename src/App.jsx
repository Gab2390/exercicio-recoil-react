import { useRecoilValue } from 'recoil'
import { todoListState } from './atoms/todoState'
import TaskFilter from './components/TaskFilter'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const todos = useRecoilValue(todoListState)
  const completedCount = todos.filter((todo) => todo.completed).length
  const pendingCount = todos.length - completedCount

  return (
    <main className="app-shell">
      <section className="workspace">
        <section className="task-panel" aria-label="Lista de tarefas">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">LISTA DE HOJE</p>
              <h2>O que vamos fazer?</h2>
            </div>
            <div className="progress-note" aria-live="polite">
              <strong>{completedCount}</strong><span>de {todos.length} feitas</span>
            </div>
          </div>
          <TaskForm />
          <TaskFilter />
          <TaskList />
          <footer className="list-footer">
            <span>{pendingCount} {pendingCount === 1 ? 'passo' : 'passos'} pela frente</span>
            <span className="footer-spark" aria-hidden="true">✳</span>
          </footer>
        </section>
      </section>
    </main>
  )
}

export default App