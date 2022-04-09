
import './App.css';
import Button from './Button'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Set1 from './Set1';
import Set2 from './Set2';
import Set3 from './Set3';
function App() {
  return (

    <Router>
      <div className="App">
        <header className="App-header">

          <Routes>
            <Route path="/" element={<Button />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/set1" element={<Set1 />} />
            <Route path="/set2" element={<Set2 />} />
            <Route path="/set3" element={<Set3 />} />

          </Routes>
        </header>
      </div>
    </Router>




  );
}

export default App;
