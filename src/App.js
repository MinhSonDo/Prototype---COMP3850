
import './App.css';
import Button from './Button'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Set1 from './Set1';
import Set2 from './Set2';
import Set3 from './Set3';
import Login from './Login';
<<<<<<< HEAD
import AdminPage from './AdminPage';
=======
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
>>>>>>> MinhSon

function App() {
  return (

    <Router>
      <div className="App">
        <header className="App-header">

          <Routes>
            <Route path="/" element={<Button />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/adminPage" element={<AdminPage/>} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/set1" element={<Set1 />} />
            <Route path="/set2" element={<Set2 />} />
            <Route path="/set3" element={<Set3 />} />
            <Route path="/Question1" element={<Question1 />} />
            <Route path="/Question2" element={<Question2 />} />
            <Route path="/Question3" element={<Question3 />} />

          </Routes>
        </header>
      </div>
    </Router>




  );
}

export default App;
