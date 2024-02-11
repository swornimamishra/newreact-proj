import './App.css';
import About from './components/About';
import Home from './components/Home';

function App() {
  const uuu = "My First React App"
  const yyy = "yyyyyy"
  const aboutus = "My name is swarnima mishra i am web devloper."
  return (
    <div className="App">
     <Home abcd = {uuu} ttt ={yyy}/>
     <About abc = {aboutus}/>
    </div>
  );
}

export default App;
