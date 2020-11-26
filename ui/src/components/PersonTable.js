import React from 'react'

const Person = ({ fname, lname, handleSelect, handleDelete }) => {

  return (
    <tr>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>
        <div className="field is-grouped">
          <p className="control">
            <button className="button is-link" onClick={handleSelect}>
              Select
            </button>
          </p>
          <p className="control">
            <button className="button is-link is-light" onClick={handleDelete}>
              Delete
            </button>
          </p>
        </div>
      </td>
    </tr>
  )
}

const PersonTable = ({ persons, handleSelect, handleDelete }) => {

  return (
    <div className="container m-6">
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(p => <Person key={p.id} fname={p.fname} lname={p.lname}
                                    handleSelect={() => handleSelect(p)}
                                    handleDelete={() => handleDelete(p)} />)}
        </tbody>
      </table>
    </div>
  )
}

export default PersonTable