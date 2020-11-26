import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.min.css'

import PersonForm from './components/PersonForm'
import PersonTable from './components/PersonTable'

import personService from './services/personService'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ fname, setFname ] = useState('')
  const [ lname, setLname ] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(result => {
        setPersons(result)
      })
  }, [])

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
    personService.create(newPerson)
      .then(result => {
        setPersons(persons.concat(result))
      })
  }

  const handleCancel = (event) =>{
    setFname('')
    setLname('')
  }

  return (
    <div className="columns">
      <div className="column">
        <PersonForm fname={fname} lname={lname} handleFname={handleFname} handleLname={handleLname} />
      </div>
      <div className="column">
        <PersonTable />
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
