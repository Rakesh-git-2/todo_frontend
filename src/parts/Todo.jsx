import React, { useState, useEffect } from "react";
import "./parts.css";
import ThemeButton from "../components/ThemeButton";
import InputArea from "../components/InputArea";
import Filter from "../components/InformationAndFilter";
import { TodoCard } from "../components/TodoCard";
import { addTodo, getUser, getTodos, clearCompleted } from "../services/api";
import { setRef } from "@material-ui/core";

function Todo() {
  const [name, setName] = useState("");
  const [originalList, setOriginalList] = useState([]);
  const setUserName = (val) => {
    setName(val);
  };

  useEffect(() => {
    getUser(setUserName);
  }, []);

  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("");
  const [refresh, setRefresh] = useState(false);

  const refreshList = () => {
    setRefresh(!refresh);
  };

  const fetchTodos = async () => {
    let data = await getTodos();
    setOriginalList(data.data.items);
    setList(data.data.items);
  };

  const handleSubmit = (e, input) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    addTodo(input, refreshList);
  };

  useEffect(() => {
    fetchTodos();
  }, [refresh]);

  useEffect(() => {
    changeFilter(filter);
  }, [filter]);

  const changeFilter = (selectedFilter) => {
    setFilter(selectedFilter);
    if (filter === "All") {
      setList(originalList);
      return;
    }
    let filteredList = originalList.filter((li) => {
      return li.status === filter.toLowerCase();
    });
    setList(filteredList);
  };

  const removeCompleted = () => {
    clearCompleted(refreshList);
  };

  return (
    <div className="relative z-10 flex h-auto max-w-xl px-10 mx-auto bg-yellow-3000 md:mx-auto">
      <div className="w-full mt-20 text-left ">
        <div className="flex justify-between align-middle">
          <h1 className="text-4xl font-bold text-white">Hello {name} 🙏</h1>
          <ThemeButton />
        </div>
        <InputArea handleSubmit={handleSubmit} refresh={refreshList} />
        {/* Input */}
        <Filter
          list={list ? list : []}
          options={options}
          removeCompleted={removeCompleted}
          filter={filter}
          setFilter={changeFilter}
        />
        <>
          {list &&
            list.map((li) => {
              return <TodoCard todo={li} refresh={refreshList}></TodoCard>;
            })}
        </>
      </div>
    </div>
  );
}

export default Todo;

const options = ["All", "Active", "Completed"];
