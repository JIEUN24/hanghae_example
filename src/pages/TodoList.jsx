import React, { useState } from 'react'

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState('')
  const [num, setNum] = useState(1)

  const submit = (title, num) => {
    setTodo([...todo, { id: num, title }])
    setTitle("")
  }

  return (
    <div className="App">
      <div>
        <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <button onClick={() => {
          submit(title, num)
          setNum(num + 1)
        }}>추가</button>
      </div>
      <div >
        {todo?.map((item) => {
          return <div style={{ width: '100px', height: '100px', backgroundColor: 'aqua', border: '1px solid green', borderRadius: '10px' }}>
            <p>{item.title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TodoList