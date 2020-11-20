import React from 'react'
import axios from 'axios';

function Login({ userEmail, setUserEmail, userPassword, setUserPassword, bearer, setBearer }) {
    function handleSubmit(event) {
        event.preventDefault();
        const headers = {

            'Content-Type': 'application/json;charset=UTF-8',
            Accept: "application/json"
        }

        axios({
            url: "http://localhost:8000/v1/oauth/token",
            method: 'post',
            data: {
                grant_type: "password",
                client_id: '2',
                client_secret: "d6EIKrdsmTUuv9Zo1iiUsGrGwQbC9ANAt2NDWvWe",
                password: userPassword,
                username: userEmail,
                scope: "",
            },
            headers,
        })
            .then(res => setBearer(prevBearer=> prevBearer = res.data.access_token))
            .catch(err => console.log('error: ', err))
            console.log(bearer);

    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                
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
                <button type="submit"> Login </button>
            </form>
        </div>
    )
}

export default Login