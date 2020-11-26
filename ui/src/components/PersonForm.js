import React from 'react'

const PersonForm = () => {

  return (
    <div className="container m-6">
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input className="input" type="text" />
        </div>
      </div>

      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input className="input" type="text" />
        </div>
      </div>

      <div className="field is-grouped">
        <p className="control">
          <a className="button is-primary">
            Submit
          </a>
        </p>
        <p className="control">
          <a className="button is-light">
            Cancel
          </a>
        </p>
      </div>
    </div>
  )
}

export default PersonForm