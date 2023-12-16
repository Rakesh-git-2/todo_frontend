import React, { useState } from "react";
import Circle from "../images/circle.svg";
// import { list as data } from "./data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function InputArea({
  handleSubmit,
  type = "add",
  todo = { deadline: "", title: "", description: "" },
}) {
  todo.deadline = todo.deadline ? new Date(todo.deadline) : null;
  const [input, setInput] = useState(todo);
  const [error, setError] = useState([]);
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-lg py-4 px-4 z-10">
      <form
        style={{ width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault();
          let newErrors = [];
          console.log(todo);
          if (input.deadline === null) {
            newErrors = [...newErrors, "Please set a deadline for your task"];
          }

          if (input.title === "") {
            newErrors = [...newErrors, "Title cannot be empty"];
          }

          if (input.description === "") {
            newErrors = [...newErrors, "Description cannot be empty"];
          }

          setError(newErrors);

          if (newErrors.length > 0) {
            return;
          } else {
            if (type === "update") {
              input.id = todo.id;
              handleSubmit(input);
            } else {
              handleSubmit(e, input);
              setInput({ deadline: "", title: "", description: "" });
            }
          }
        }}
      >
        {type == "update" && "🤷 What to do ?"}
        <div
          id="#input"
          className=" flex w-full h-16 pl-6 my-4 text-lg leading-tight text-gray-700 align-middle bg-white rounded shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline"
        >
          <div>
            <img src={Circle} alt="LogoCentang" className="mt-5 mr-6" />
          </div>
          <div
            className="flex items-center justify-end "
            style={{ width: "100%" }}
          >
            <input
              className="w-full sm:text-sm md:text-lg h-16 border-none input dark:bg-input-dark dark:text-gray-300"
              id="username"
              type="text"
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
              placeholder="🤷 What to do ?"
            />
          </div>
        </div>
        {type == "update" && "🤔 How to do (Description)?"}
        <div
          id="#input"
          className=" flex w-full h-24 pl-6 my-4 text-lg leading-tight text-gray-700 align-middle bg-white rounded shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline"
        >
          <div
            className="flex items-center justify-end "
            style={{ width: "100%" }}
          >
            <input
              className="w-full h-24 border-none sm:text-sm md:text-lg input dark:bg-input-dark dark:text-gray-300"
              id="username"
              type="textarea"
              value={input.description}
              onChange={(e) =>
                setInput({ ...input, description: e.target.value })
              }
              placeholder="🤔 How to do (Description)?"
            />
          </div>
        </div>
        {type == "update" && "📆 When to do (Deadline)?"}
        <div>
          <div
            className={`flex items-center justify-center mt-4 ${
              error ? "mb-2" : ""
            }`}
          >
            <div className="w-full">
              <DatePicker
                selected={input.deadline}
                onChange={(date) => setInput({ ...input, deadline: date })}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="📆 When to do (Deadline)?"
                className="px-4 w-full sm:text-sm md:text-lg shadow-sm h-16 border-none input dark:bg-input-dark dark:text-gray-300"
              />
            </div>
            <div className="w-3/12">
              <button
                type="submit"
                className="bg-cta text-bg-light h-16 w-full"
              >
                {type === "update" ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </form>
      {error &&
        error.map((er) => (
          <div>
            <p className="text-red-500">{er}</p>
          </div>
        ))}
    </div>
  );
}

export default InputArea;
