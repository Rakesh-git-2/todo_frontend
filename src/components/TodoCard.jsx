import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Circle from "../images/circle.svg";
import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import InputArea from "./InputArea";
import { updateTodo, deleteTodo } from "../services/api";

export function TodoCard({ todo, refresh }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    if (!isChecked) {
      todo.status = "completed";
      updateTodo(todo);
      setIsChecked(true);
    }
  };

  useEffect(() => {
    if (todo.status === "completed") {
      setIsChecked(true);
    }
    return () => {
      setIsChecked(false);
    };
  }, [todo]);

  const formatUTCDate = (utcTimestamp) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    const localDate = new Date(utcTimestamp);
    return localDate.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <section class=" flex items-center justify-center px-4 shadow-md bg-card-lighter dark:bg-card-dark rounded-lg my-4">
        <div class="max-w-xl w-full flex md:flex-row flex-col">
          <div class="flex-1">
            <div className="flex items-center ">
              <button
                onClick={() => toggleCheckbox()}
                className={`w-6 my-4 h-6 flex items-center justify-center rounded border border-gray-400 focus:outline-none focus:border-gray-400 bg-white ${
                  isChecked ? "bg-green-400 border-green-400 " : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {isChecked && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.707 3.293a1 1 0 0 1 0 1.414L8.707 14.414a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l8.293-8.293a1 1 0 0 1 1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <h3
                style={{ transform: "translateY(2px)" }}
                className={`ml-3 font-semibold text-gray-600 dark:text-white text-xl tracking-wide space-y-0 ${
                  isChecked ? "line-through" : ""
                }`}
              >
                {" "}
                {todo.title}
              </h3>
            </div>
            <p class="text-gray-500 text-md dark:text-gray-300 my-1">
              {todo.description}
            </p>
            <div className="flex items-center mb-4 justify-between">
              <p class="text-gray-400 mt-4 text-xs">
                📆 {formatUTCDate(todo.deadline)}
              </p>
              <div className="flex items-center justify-end gap-3 ">
                <AiFillEdit
                  className="cursor-pointer"
                  onClick={() => setModalOpen(true)}
                  size={22}
                  color="#3b82f6"
                />
                <AiFillDelete
                  className="cursor-pointer"
                  onClick={() => deleteTodo(todo.id, refresh)}
                  size={22}
                  color="#f87171"
                ></AiFillDelete>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="top-0.5 left-0.5 fixed z-10">
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-black opacity-75 fixed inset-0 "></div>
            <div
              style={{ maxWidth: "600px", minWidth: "60%" }}
              className="bg-white p-8 rounded shadow-lg z-10 "
            >
              <InputArea
                handleSubmit={updateTodo}
                todo={todo}
                type="update"
              ></InputArea>
            </div>
          </div>
          ,
        </div>
      )}
    </>
  );
}
