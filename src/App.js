import { Router } from '@reach/router';
import './App.css';
import DisplayIntString from './Components/DisplayIntString';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <DisplayIntString path= "/:content" />
        <DisplayIntString path= "/:content/:bgcolor" />
        <DisplayIntString path= "/:content/:bgcolor/:color" />
      </Router>
    </div>
  );
}

export default App;
