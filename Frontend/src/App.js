import logo from './logo.svg';
import './App.css';
import "../src/components/Login/Login";
import Seeall from './components/View/Seeall';
import LoginPage from '../src/components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navbar';
import Openprojects from './components/checkopen/Openprojects';
function App() {
  return (
    <div>
      <Navbar />
      <Seeall/>
      <Openprojects/>
    </div>
  );
}

export default App;
