import { useState } from 'react'

const Practice = () => {
  const [people, setPeople] = useState([])
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    active: true,
    id: 0
  })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setPeople([...people, values])
    setValues({
      firstName: '',
      lastName: '',
      active: false,
      id: values.id + 1
    })
  }

  const remove = (index) => {}

  return (
    <div>
      <div>
        <input
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {people.map((person) =>
        person.active ? (
          <div>
            <div key={person.firstName}>{person.firstName}</div>
            <button>Remove</button>
          </div>
        ) : null
      )}
    </div>
  )
}

export default Practice
