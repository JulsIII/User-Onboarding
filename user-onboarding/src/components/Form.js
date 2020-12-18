import React from "react";

export default function Form(props) {
    const { formValues, change, submit, buttonDisabled, errors } = props;
    return (
        <div>
        <form onSubmit={submit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={change}
            />
            <p>{errors.name}</p> 
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={change}
            /> 
           <p>{errors.email}</p>         
          </label>
          <label htmlFor="email">
            Password
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={change}
            />   
            <p>{errors.password}</p>        
          </label>
          <label htmlFor="terms">
          Agree to Terms<input type="checkbox" name="terms" onChange={change}/> 
        </label>
          <button id='submitBtn' disabled={buttonDisabled}>Submit</button>
        </form>
      </div>
    );
  }