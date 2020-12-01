import React, { useState } from 'react'
import './App.css';
import Registration from './Registration';
import NewUser from './newUser';
import Login from './Login';
import NavBar from './NavBar';
import Profile from './Profile';

function App() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [bearer, setBearer] = useState('');
  const [userInfo, setUserInfo] = useState();
  return (
    <>

    <NavBar />
    {bearer ? 
      <Profile 
        //userInfo={userInfo}
      />
      : 
      <>
      <Login
         setUserEmail={setUserEmail}
        userEmail={userEmail}
        setUserPassword={setUserPassword}
        userPassword={userPassword}
        bearer={bearer}
        setBearer={setBearer}
        setUserInfo={setUserInfo}
      />

      <NewUser
        setUserName={setUserName}
        userName={userName}
        setUserEmail={setUserEmail}
        userEmail={userEmail}
        setUserPassword={setUserPassword}
        userPassword={userPassword}
        setBearer={setBearer}
        setUserInfo={setUserInfo}
      />
      </>
    }
    </>
  );
}

export default App;
