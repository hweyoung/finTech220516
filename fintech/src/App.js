import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import StateAndEvent from './components/StateAndEvent';


function App() {
  return (
    <div className="APP">
      <header className = "App-header">
      <Welcome username="egoing" age = "29"></Welcome>
      <StateAndEvent></StateAndEvent>
      </header>
    </div>
  );
}

export default App;
