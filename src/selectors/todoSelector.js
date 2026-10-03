import { selector } from 'recoil'
import { todoFilterState, todoListState } from '../atoms/todoState'

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const todos = get(todoListState)
    const filter = get(todoFilterState)

    if (filter === 'completed') return todos.filter((todo) => todo.completed)
    if (filter === 'pending') return todos.filter((todo) => !todo.completed)
    return todos
  },
})