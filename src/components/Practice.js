import { useState } from 'react'

const Practice = () => {
  const [list, setList] = useState([])
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    setList([...list, value])
    setValue('')
  }

  const deleteItem = (index) => {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  return (
    <div>
      <div>
        <input
          placeholder="To Do"
          value={value}
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>ADD</button>
      </div>
      {list.map((item, index) => (
        <div key={item}>
          <div>{item}</div>
          <button onClick={() => deleteItem(index)}>X</button>
        </div>
      ))}
    </div>
  )
}

export default Practice
