import React from 'react'

const Person = ({ fname, lname }) => {

  return (
    <tr>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>
        <div className="field is-grouped">
          <p className="control">
            <a className="button is-link">
              Select
            </a>
          </p>
          <p className="control">
            <a className="button is-link is-light">
              Delete
            </a>
          </p>
        </div>
      </td>
    </tr>
  )
}

const PersonTable = () => {

  const persons = [
    { fname: 'Sharad', lname: 'S' }
  ]

  return (
    <div className="container m-6">
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(p => <Person fname={p.fname} lname={p.lname} />)}
        </tbody>
      </table>
    </div>
  )
}

export default PersonTable