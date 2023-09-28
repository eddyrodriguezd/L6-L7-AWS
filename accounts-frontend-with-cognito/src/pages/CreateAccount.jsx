import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import ApiUtil from '../api/ApiUtil';
import { API_CONSTANTS } from '../api/ApiConstants';

const CreateAccount = () => {
    const [userId, setUserId] = useState('');
    const [givenName, setGivenName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const requestData = {
                userId,
                givenName,
                lastName,
            };
            console.log(`Request for CreateAccount: userId=${requestData.userId}, givenName=${requestData.givenName}, lastName=${requestData.lastName}`);

            const response = await ApiUtil.apiCall(
                API_CONSTANTS.CREATE_ACCOUNT.url,
                API_CONSTANTS.CREATE_ACCOUNT.method,
                requestData
            );
            console.log(`Response from CreateAccount: ${response}`);

            if (response.ok) {
                setSuccess(true);
                setMessage('Account created successfully.');
            }
            else {
                setSuccess(false);
                setMessage('Error creating account. Please try again.');
            }
        }
        catch (error) {
            console.error(`Error encountered: ${error}`)
            setSuccess(false);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <Card.Title>Create Account</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="userId">
                            <Form.Label>User ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="863e9631-c8bf-4448-b8be-3d1fe302d180"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="givenName">
                            <Form.Label>Given Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Eddy"
                                value={givenName}
                                onChange={(e) => setGivenName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Rodriguez"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Form.Group>

                        <div className="mt-3 mb-3">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                    {message && (
                        <Alert variant={success ? 'success' : 'danger'}>{message}</Alert>
                    )}
                </Card.Body>
            </Card>
        </>
    );
};

export default CreateAccount;