import logo from './logo.svg';
import './App.css';
import "../src/components/Login/Login";
import Seeall from './components/View/Seeall';
import LoginPage from '../src/components/Login/Login';
function App() {
  return (
    <div>
      <LoginPage />
      <Seeall/>
    </div>
  );
}

export default App;
