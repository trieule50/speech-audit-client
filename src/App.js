import './App.css';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Switch>
          <Route path='/' render={()=> <Home/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
