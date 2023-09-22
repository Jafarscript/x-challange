import './App.css';
import FAQ from './components/FAQ';
import Homepage from './components/Homepage';
import Intro from './components/Intro';
import Judge from './components/Judge';
import Navbar from './components/Navbar';
import Partner from './components/Partner';
import Privacy from './components/Privacy';
import Prize from './components/Prize';
import Rules from './components/Rules';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Intro />
      <Rules />
      <Judge />
      <FAQ />
      <Timeline />
      <Prize />
      <Partner />
      <Privacy />
    </div>
  );
}

export default App;
