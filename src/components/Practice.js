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
      active: true,
      id: values.id + 1
    })
  }

  const remove = (person) => {
    let newPeople = [...people]
    let index = newPeople.indexOf(person)
    newPeople[index] = { ...people[index], active: false }
    setPeople(newPeople)
  }

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
          <div key={person.firstName}>
            <div>{person.firstName}</div>
            <button onClick={() => remove(person)}>Remove</button>
          </div>
        ) : null
      )}
    </div>
  )
}

export default Practice
