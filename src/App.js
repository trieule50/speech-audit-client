import './App.css';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import Navigation from './components/Navigation';
import Demo from './components/Demo';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Switch>
          <Route path='/signin' exact render={()=> <Signin/>}/>
          <Route path='/signup' exact render={()=> <Signup/>}/>
          <Route path='/demo' exact render={()=> <Demo/>}/>
          <Route path='/' exact render={()=> <Home/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
