//imports from React
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState,useEffect } from 'react';

//imports components
import Home from './components/Home';
import Navigation from './components/Navigation';
import Demo from './components/Demo';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Tone from './components/Tone';


function App() {

  const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
  )

  const [userInfo, setUserInfo] = useState(null)

  console.log(userInfo)



  return (
    <div className="App">
      <Navigation
      />
      <main>
        <Switch>
          <Route path='/tone' exact render={()=> <Tone/>}/>
          <Route path='/signin' exact render={()=> <Signin setUserInfo={setUserInfo}/>}/>
          <Route path='/signup' exact render={()=> <Signup/>}/>
          <Route path='/demo' exact render={()=> <Demo/>}/>
          <Route path='/' exact render={()=> <Home loggedIn={loggedIn} userInfo={userInfo}/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
