import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.min.css'

import PersonForm from './components/PersonForm'
import PersonTable from './components/PersonTable'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ fname, setFname ] = useState('')
  const [ lname, setLname ] = useState('')

  const handleFname = (event) => {
    setFname(event.target.value)
  }

  const handleLname = (event) => {
    setLname(event.target.value)
  }

  const handleSubmit = (event) => {

  }

  const handleCancel = (event) =>{

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
