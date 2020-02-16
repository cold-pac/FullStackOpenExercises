import React, { useState } from 'react'

const Filter = props => {
    return (
        <div>
            Filter shown with <input value = {props.inputValue} onChange = {props.inputHandleChange}/> 
        </div>
    )
}

const PersonForm = props => {
    console.log(props)

    const handleNameChange = event => {
        props.toAlterName(event.target.value)
    }

    const handleNumberChange = event => {
        props.toAlterNumber(event.target.value)
    }
    return (
    <form onSubmit = {props.submitter}>
            <div> name: <input onChange = {handleNameChange} value = {props.name}  /> </div>
            <div> number: <input onChange = {handleNumberChange} value = {props.number}  /> </div>
            <div>
            <button type="submit">add</button>
            </div>
      </form>
    )
}

const Persons = props => {
   
    return  (
    <>
        {props.persons.filter(elem => (elem.name.includes(props.searchTerm) || elem.name.toLowerCase().includes(props.searchTerm))).map(elem => <p key = {elem.name}>{elem.name} {elem.number}</p>)}
    </>
    )
    
}

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
      <Filter inputValue = {searchTerm} inputHandleChange = {handleSearch}/> 
      <h3>add a new</h3>
      <PersonForm submitter = {addName} name = {newName} number = {newNumber} toAlterName = {setNewName} toAlterNumber = {setNewNumber}/> 
      <h3>Numbers</h3>
      <Persons persons = {persons} searchTerm = {searchTerm}/> 
    </div>
  )
}

export default App