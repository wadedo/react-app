import React from "react";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  // const form = useForm();
  // console.log(form);
  const { register, handleSubmit } = useForm(); //register输出一个object。

  //有了react hook form, 不需要state hook.
  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // value={person.name}
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }
          {...register("names")}
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
          // value={person.age}
          // onChange={(event) =>
          //   setPerson({ ...person, age: parseInt(event.target.value) })
          // }
          {...register("age")}
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
