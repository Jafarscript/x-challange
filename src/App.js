import './App.css';
import Homepage from './components/Homepage';
import Intro from './components/Intro';
import Judge from './components/Judge';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';
import Rules from './components/Rules';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Intro />
      <Rules />
      <Judge />
      <Privacy />
    </div>
  );
}

export default App;
