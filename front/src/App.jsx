import NavBar from './components/navBar'
import Home from './views/home/home'
import {Route,BrowserRouter as Router, Routes} from "react-router-dom";
/* import './App.css'; */

function App() {
  return (
    <div>
        <NavBar/>
        <Router>
          <Routes>
          <Route path='/' element={<Home/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
