import React, {useState} from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import Main from "./Main";
import Home from "./components/Home/Home";
import SignUp from "./components/Signup/Signup";
import NewChirp from "./components/New/Newchirp";
import Signin from "./components/Signin/Signin"

function App() {

    const [getUser, setUser] = useState({});

  return (
      <div className="App" >
          <div>
              <nav>
                  <Link className="app-name" to="/Signup"><i><b>TwiLite</b></i></Link>
                  <div>

                      <div className="nav-bar">
                          <Link className="nav-item" to="/Signin"><button>Sign In</button></Link>
                          <Link className="nav-item" to="/Signup"><button>Sign Up</button></Link>
                      </div>
                  </div>
              </nav>
            <Router>
                <Home path='/Home' getUser={getUser}/>
                <SignUp path='/Signup' setUser={setUser} />
                <NewChirp path='/Home/NewChirp' getUser={getUser} />
                <Signin path='/Signin' setUser={setUser} />
            </Router>
          </div>
      </div>
  );
}

export default App;
