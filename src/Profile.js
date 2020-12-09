import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, Card, CardFooter } from 'reactstrap';


function Profile({ userInfo, setBearer, bearer, newPost, createdPosts, setCreatedPosts }) {
    const [post, setPost] = useState('');
    //const [ref_parent_post_id, setRefParentPostId] = useState();


    function newPost(event) {
        event.preventDefault();
        const url = 'http://localhost:8000/makePost'
        const method = 'post'

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
                setCreatedPosts(res.data)
                console.log(res)
            })

            .catch(err => console.log('error: ', err))
    }

    return (

        <Container>
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Label for="exampleText">What's on your mind?</Label>
                            <Input type="textarea" name="text" id="exampleText"
                                onChange={e => setPost(e.target.value)}
                            />
                        </FormGroup>
                        <Button onClick={newPost}>Post</Button>
                    </Form>
                </Col>
                <Col>
                    <div className="overflow-auto" style={{ height: "80vh" }}>
                        {createdPosts.sort((a, b) => {
                            return b.id - a.id;
                        }).map((item, idx) => {
                            console.log(item);
                            return (
                                <Card className="py-1 my-2 bg-light" key={idx}>
                                    <p className="px-4 pt-2 text-">
                                        {item.post}
                                    </p>
                                    <br></br>
                                    <CardFooter className="text-center">
                                    <p className="mx-auto">
                                        -{item.user.name}
                                    </p>
                                    </CardFooter>

                                </Card>)
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


export default Profile