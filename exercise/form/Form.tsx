import React, { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); //阻止默认行为
    console.log("Submitted"); //在控制台输出“Submitted”
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="text" className="form-control"></input>
      </div>
      <button>submit</button>
    </form>
  );
};

export default Form;
