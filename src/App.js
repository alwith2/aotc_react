import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import NewUser from './newUser';
import Login from './Login';
import NavBar from './NavBar';

function App() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [bearer, setBearer] = useState('');
  return (
    <>

    <NavBar />
      <Login
         setUserEmail={setUserEmail}
        userEmail={userEmail}
        setUserPassword={setUserPassword}
        userPassword={userPassword}
        bearer={bearer}
        setBearer={setBearer}
      />

      < NewUser
        setUserName={setUserName}
        userName={userName}
        setUserEmail={setUserEmail}
        userEmail={userEmail}
        setUserPassword={setUserPassword}
        userPassword={userPassword}
      />
    </>
  );
}

export default App;
