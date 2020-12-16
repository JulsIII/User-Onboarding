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
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={change}
            /> 
            {/* Put the errors on screen */}
           <p>{errors.email}</p>         
          </label>
          <label htmlFor="email">
            Password
            <input
              type="passsword"
              name="password"
              value={formValues.password}
              onChange={change}
            />          
          </label>
          <label htmlFor="terms">
          Terms <input type="checkbox" name="terms" onChange={change}/>
        </label>
          <button disabled={buttonDisabled}>Submit</button>
        </form>
      </div>
    );
  }