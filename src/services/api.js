import http from "./http";
const baseURL = process.env.REACT_APP_BACKEND_URL;

const signup = (payload, cb, error) => {
  http
    .post(baseURL + "todos/signup/", payload)
    .then((data) => cb())
    .catch((err) => error(err.response.data.error));
};

const login = (payload, cb) => {
  http
    .post(baseURL + "todos/login/", payload)
    .then((data) => cb(data.data.token));
};

const logout = () => {
  http.get(baseURL + "todos/logout/").then((data) => {
    localStorage.removeItem("token");
    window.location = "/login";
  });
};

const getUser = (cb) => {
  http.get(baseURL + "todos/getUser/").then((data) => cb(data.data.username));
};

const addTodo = (payload, cb) => {
  http.post(baseURL + "todos/addTodo/", payload).then((data) => cb());
};

const updateTodo = (payload) => {
  http
    .post(baseURL + "todos/updateTodo/", payload)
    .then((data) => console.log(data));
};

const getTodos = (cb) => {
  return http.get(baseURL + "todos/getTodos/");
};

const deleteTodo = (id, cb) => {
  http.delete(baseURL + `todos/${id}/deleteTodo/`).then((data) => cb());
};

const clearCompleted = (cb) => {
  http.delete(baseURL + `todos/clearCompleted/`).then((data) => cb());
};

export {
  signup,
  login,
  logout,
  addTodo,
  getUser,
  getTodos,
  updateTodo,
  deleteTodo,
  clearCompleted,
};
