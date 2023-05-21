import React from 'react'

const Signup = () => {
  return (
    <div>
            <form>
  {/* 2 column grid layout with text inputs for the first and last names */}
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form6Example1">
         Retailer Id
        </label>
        <input type="text" id="form6Example1" className="form-control" />
        
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form6Example2">
          shop name
        </label>
        <input type="text" id="form6Example2" className="form-control" />
       
      </div>
    </div>
  </div>
  {/* Text input */}
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form6Example3">
      Quantity
    </label>
    <input type="text" id="form6Example3" className="form-control" />
   
  </div>
  {/* Text input */}
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form6Example4">
     Date
    </label>
    <input type="text" id="form6Example4" className="form-control" />
   
  </div>
  {/* Email input */}
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form6Example5">
      Email
    </label>
    <input type="email" id="form6Example5" className="form-control" />
   
  </div>
  {/* Number input */}
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form6Example6">
      Product Image
    </label>
    <input type="file" id="form6Example6" className="form-control" />
   
  </div>
  {/* Message input */}
  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form6Example7">
      Additional information about product
    </label>
    <textarea
      className="form-control"
      id="form6Example7"
      rows={1}
      defaultValue={""}
    />
   
  </div>
  {/* Checkbox */}
  <div className="form-check d-flex justify-content-center mb-4">
    <input
      className="form-check-input me-2"
      type="checkbox"
      defaultValue=""
      id="form6Example8"
      defaultChecked=""
    />
   
  </div>
  {/* Submit button */}
  <button type="submit" className="btn btn-primary btn-block mb-4">
    Save
  </button>
</form>
    </div>
  )
}

export default Signup
