import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Content/Home';
import Header from './Components/Pages/Header/Header';
import Login from './Components/Pages/Auth/Login';
import Register from './Components/Pages/Auth/Register';
import Task from './Components/Pages/Content/Task';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/task' element={<Task />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
