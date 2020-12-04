import React, { useEffect } from 'react'
import axios from 'axios';

function Login({ setCurrentPage, setUserInfo, userEmail, setUserEmail, userPassword, setUserPassword, bearer, setBearer }) {
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
                client_secret: "olWKvHaNwxsCgsBFJQXvS8m4xLC3gbxKm57IJZUm",
                password: userPassword,
                username: userEmail,
                scope: "",
            },
            headers,
        })
            .then(res => {
                console.log(res)
                setBearer(res.data.access_token)
            })
            .catch(err => console.log('error: ', err))


    }
    useEffect(() => {
        {
            bearer &&
                axios({
                    url: "http://localhost:8000/api/user",
                    method: "get",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${bearer}`
                    }
                })
                    .then(response => {
                        console.log(response)
                        setUserInfo(response.data)
                    })
                    //.then(response => console.log(response))
                    .catch(err => console.log('error: ', err))
        }
    }, [bearer])

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
                <button type="submit" className="btn btn-danger"> Login </button>
            </form>
        </div>
    )
}

export default Login