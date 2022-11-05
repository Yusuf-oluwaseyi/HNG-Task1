import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/'  element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
