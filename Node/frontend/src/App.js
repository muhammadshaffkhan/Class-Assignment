import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Comment from './Comment';
import Signupform from './Signupform';
import './App.css';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/comment" element={<Comment/>} />
        <Route path="/signup" element={<Signupform/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
