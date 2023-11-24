import React from "react";
import { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "", // anitialize to 0.
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          value={person.name} //make input to be controlled component.
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          value={person.age} //make input to be controlled component.
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
