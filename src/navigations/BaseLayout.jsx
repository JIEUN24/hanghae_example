import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReduxTodo from '../pages/reduxTodo'
import ReduxTodoDetail from '../pages/reduxTodoDetail'
import State from '../pages/State'
import TodoList from '../pages/TodoList'

const BaseLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/redux" element={<ReduxTodo />} />
        <Route path="/state" element={<State />} />
        <Route path="/detail/:id" element={<ReduxTodoDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default BaseLayout