import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Registration from './Registration';
import NewUser from './newUser';
import Login from './Login';
import NavBar from './NavBar';
import Profile from './Profile';
import Footer from './Footer';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Card } from 'reactstrap';

function App() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [bearer, setBearer] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [newPost, setNewpost] = useState('');
  const [createdPosts, setCreatedPosts] = useState([]);

  useEffect(() => {
    //const url = 'http://localhost:8000/posts/all'
    const url = 'https://aotc-laravel.herokuapp.com/posts/all'
    const method = 'get'
    axios({
      url,
      method,
      headers: {
        Accept: "application/json",
      },
    })
      .then(res => {
        setCreatedPosts(res.data)
        console.log(res)
      })

      .catch(err => console.log('error: ', err))

  }, [bearer])

  return (
    <>

      <NavBar
        bearer={bearer}
        setBearer={setBearer}
      />
      {bearer ?
        <Profile
          userInfo={userInfo}
          setBearer={setBearer}
          bearer={bearer}
          newPost={newPost}
          createdPosts={createdPosts}
          setCreatedPosts={setCreatedPosts}
        />
        :
        <>

          <Container>
            <Row>
              <Col>

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

              </Col>
            </Row>
          </Container>
        </>
      }
      <Footer />

    </>
  );
}

export default App;
