import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = event => {
      setNewName(event.target.value)
  }

  const addName = event => {
        event.preventDefault()
        if (persons.map(elem => elem.name).indexOf(newName) === -1) {
            const nameObject = {
                name: newName,
            }
            setPersons(persons.concat(nameObject))
        } else {
            alert(`${newName} is already added to phonebook`)
        }
        setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: 
          <input 
            value = {newName}
            onChange = {handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(elem => <p key = {elem.name}>{elem.name}</p>)}
    </div>
  )
}

export default App