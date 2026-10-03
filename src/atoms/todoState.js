import { atom } from 'recoil'

const STORAGE_KEY = 'passo-todos'

function persistTodos({ onSet }) {
  onSet((todos) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

function readInitialTodos() {
  try {
    const savedTodos = window.localStorage.getItem(STORAGE_KEY)
    return savedTodos ? JSON.parse(savedTodos) : []
  } catch {
    return []
  }
}

export const todoListState = atom({
  key: 'todoListState',
  default: readInitialTodos(),
  effects: [persistTodos],
})

export const todoFilterState = atom({
  key: 'todoFilterState',
  default: 'all',
})