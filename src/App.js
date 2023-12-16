import './App.css';
import HomePage from './pages/HomePage';
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/Login';

function App() {
  console.log(process.env.NODE_ENV)
  let token = localStorage.getItem('token')
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={token ? <HomePage/> : <LoginPage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/signup" element={<SignupPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
