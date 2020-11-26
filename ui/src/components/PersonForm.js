import React from 'react'

const PersonForm = ({ fname, lname, handleFname, handleLname, handleSubmit, handleCancel }) => {

  return (
    <div className="container m-6">
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input className="input" type="text" value={fname} onChange={handleFname} />
        </div>
      </div>

      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input className="input" type="text" value={lname} onChange={handleLname} />
        </div>
      </div>

      <div className="field is-grouped">
        <p className="control">
          <button className="button is-primary" onClick={handleSubmit}>
            Submit
          </button>
        </p>
        <p className="control">
          <button className="button is-light" onClick={handleCancel}>
            Cancel
          </button>
        </p>
      </div>
    </div>
  )
}

export default PersonForm