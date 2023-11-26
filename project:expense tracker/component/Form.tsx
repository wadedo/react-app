import React, { FormEvent } from "react";//注意要 导入{ FormEvent }

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); //阻止默认行为
    console.log("Submitted"); //在控制台输出“Submitted”
  };
  return (
    <form onSubmit={handleSubmit}>//here just reference the function not calling.
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
