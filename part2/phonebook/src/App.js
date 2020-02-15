import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ searchTerm, setSearchTerm ] = useState('')

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleSearch = event => {
      setSearchTerm(event.target.value)
  }

  const handleNameChange = event => {
      setNewName(event.target.value)
  }

  const handleNumberChange = event => {
      setNewNumber(event.target.value)
  }

  const addName = event => {
        event.preventDefault()
        if (persons.map(elem => elem.name).indexOf(newName) === -1) {
            const nameObject = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(nameObject))
        } else {
            alert(`${newName} is already added to phonebook`)
        }
        setNewName('')
        setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          Filter shown with <input value = {searchTerm} onChange = {handleSearch}/> 
      </div>
      <h2>add a new</h2>
      <form onSubmit = {addName}>
        <div> name: <input value = {newName} onChange = {handleNameChange} /> </div>
        <div> number <input value = {newNumber} onChange = {handleNumberChange} /> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(elem => (elem.name.includes(searchTerm) || elem.name.toLowerCase().includes(searchTerm))).map(elem => <p key = {elem.name}>{elem.name} {elem.number}</p>)}
    </div>
  )
}

export default App