import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReduxExample from '../pages/ReduxExample'
import State from '../pages/State'
import TodoList from '../pages/TodoList'

const BaseLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/redux" element={<ReduxExample />} />
        <Route path="/state" element={<State />} />
      </Routes>
    </BrowserRouter>
  )
}

export default BaseLayout