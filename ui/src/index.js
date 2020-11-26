import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.min.css'

import PersonForm from './components/PersonForm'
import PersonTable from './components/PersonTable'

import personService from './services/personService'

const App = () => {

  const [persons, setPersons] = useState([])
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  const [updateId, setUpdateId] = useState(null)

  useEffect(() => {
    personService.getAll()
      .then(result => {
        setPersons(result)
      })
  }, [])

  const cleanupForm = () => {
    setFname('')
    setLname('')
    setUpdateId(null)
  }

  const handleFname = (event) => {
    setFname(event.target.value)
  }

  const handleLname = (event) => {
    setLname(event.target.value)
  }

  const handleSubmit = (event) => {
    if (fname === '' || lname === '') {
      window.alert("First name or last name cannot be empty")
      return
    }
    const newPerson = {
      fname: fname,
      lname: lname
    }
    if (updateId) {
      personService.update(updateId, newPerson)
        .then(result => {
          setPersons(persons.map(p => p.id === result.id ? result : p))
        })
        .catch(error => {
          alert("This person has already been deleted from the database")
        })
      cleanupForm()
    } else {
      personService.create(newPerson)
        .then(result => {
          setPersons(persons.concat(result))
          cleanupForm()
        })
    }
  }

  const handleCancel = (event) => {
    cleanupForm()
  }

  const handleSelect = (person) => {
    setFname(person.fname)
    setLname(person.lname)
    setUpdateId(person.id)
  }

  const handleDelete = (person) => {
    personService.remove(person.id)
      .then(result => {
        setPersons(persons.filter(p => p.id !== person.id))
      })
  }

  return (
    <div className="columns">
      <div className="column">
        <PersonForm
          fname={fname}
          lname={lname}
          handleFname={handleFname}
          handleLname={handleLname}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel} />
      </div>
      <div className="column">
        <PersonTable
          persons={persons}
          handleSelect={handleSelect}
          handleDelete={handleDelete} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
