import axios from 'axios'
import { useState, useEffect } from 'react'
import Login from '../components/Login'
import Home from '../components/Home'

const Landing = () => {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    setList([...list, value])
    setValue('')
  }

  const removeTask = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  useEffect(() => {}, [])

  return (
    <div className="landing">
      <div>hello</div>
      <Login />
      <input onChange={handleChange} value={value}></input>
      <button onClick={handleSubmit}>S</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Landing
