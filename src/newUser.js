import React from 'react'
import axios from 'axios';

function newUser({ setBearer, userEmail, setUserEmail, userPassword, setUserPassword, userName, setUserName }) {
    function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8000/register'
        const method = 'post'
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
        const body = { name: userName, email: userEmail, password: userPassword }
        const data = { name: userName, email: userEmail, password: userPassword }

        axios({
            url,
            method,
            headers,
            body,
            data
        })
            .then(res => {
                console.log(res)
                setBearer(res.data.data.token)
            })

            .catch(err => console.log('error: ', err))

    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter user name"
                    onChange={e => setUserName(e.target.value)}
                />
                <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={e => setUserEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={e => setUserPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-danger"> Register </button>
            </form>
        </div>
    )
}

export default newUser
