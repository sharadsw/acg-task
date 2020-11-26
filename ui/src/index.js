import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.min.css'

import PersonForm from './components/PersonForm'
import PersonTable from './components/PersonTable'

const App = () => {
  
  return (
    <div className="columns">
      <div className="column">
        <PersonForm />
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
