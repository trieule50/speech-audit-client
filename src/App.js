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
		localStorage.getItem('token', 'email') ? true : false
  )

  const [userInfo, setUserInfo] = useState(null)

  const handleSetLoggedIn = (token) => {
		localStorage.setItem('token', token.token);
    localStorage.setItem('email', token.email);
		setLoggedIn(true);
	};

  const getUserInfo = async () => {
		try {
			const response = await fetch(`https://trieu-speech-audit-api.herokuapp.com/user/login/${localStorage.getItem('email')}`, {
        method: 'POST',
        body: JSON.stringify({ email: localStorage.getItem('email')}),
        headers:{
          'Content-Type': 'application/json',
        }
      })
			const data = await response.json();
			setUserInfo(data);
		} catch (error) {
			console.log(error);
		}
	};

  const _handleLogout = async () => {
    setLoggedIn(false);
		setUserInfo(null);
		localStorage.removeItem('token');
    localStorage.removeItem('email')
  }

  useEffect(() =>{
    if(loggedIn){
      getUserInfo();
    }
  }, [])


  return (
    <div className="App">
      <Navigation
      loggedIn={loggedIn}
      userInfo={userInfo}
      _handleLogout={_handleLogout}
      />
      <main>
        <Switch>
          <Route path='/tone' exact render={()=> <Tone/>}/>
          <Route path='/signin' exact render={()=> <Signin setUserInfo={setUserInfo} handleSetLoggedIn={handleSetLoggedIn}/>}/>
          <Route path='/signup' exact render={()=> <Signup/>}/>
          <Route path='/demo' exact render={()=> <Demo/>}/>
          <Route path='/' exact render={()=> <Home loggedIn={loggedIn} userInfo={userInfo}/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
