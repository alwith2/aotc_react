import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Card } from 'reactstrap';


function Profile({ userInfo, setBearer, bearer, newPost }) {
    const [post, setPost] = useState('');
    //const [ref_parent_post_id, setRefParentPostId] = useState();
    const [createdPosts, setCreatedPosts] = useState([]);

    function storePosts(data) {
        setCreatedPosts(data);
    }
    function newPost(event) {
        event.preventDefault();
        const url = 'http://localhost:8000/makePost'
        const method = 'post'
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }

        const data = { post: post, ref_user_id: userInfo.id, /*ref_parent_post_id: ref_parent_post_id*/ }
        axios({
            url,
            method,
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${bearer}`
            },

            data
        })
            .then(res => {
                console.log(res)
            })

            .catch(err => console.log('error: ', err))
    }

    useEffect(() => {
        {
            axios({
                url: "http://localhost:8000/posts/all",
                method: 'get',
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${bearer}`
                },

                data: '',
            })
                .then(res => {
                    console.log("res", res.data)
                    //setCreatedPosts(res.data)
                    //storePosts(res.data)
                })

                .catch(err => console.log('error: ', err))
        }
    })

    return (

        <Container>
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText"
                                onChange={e => setPost(e.target.value)}
                            />
                        </FormGroup>
                        <Button onClick={newPost}>Post</Button>
                    </Form>
                </Col>
                <Col>
                    {/* {createdPosts.map((item, idx) => {
                        <Card key={idx}>
                            <p>
                                {item.post}
                            </p>
                        </Card>
                    } */}

                    )

                </Col>
            </Row>
        </Container>
    );
}


export default Profile


