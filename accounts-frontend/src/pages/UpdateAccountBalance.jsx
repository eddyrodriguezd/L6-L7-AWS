import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import ApiUtil from '../api/ApiUtil';
import { API_CONSTANTS } from '../api/ApiConstants';

const UpdateAccountBalance = () => {
    const [accountId, setAccountId] = useState('');
    const [newBalance, setNewBalance] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const requestData = {
                balance: parseFloat(newBalance),
            };

            const response = await ApiUtil.apiCall(
                API_CONSTANTS.UPDATE_ACCOUNT_BALANCE.url.replace(':account_id', accountId),
                API_CONSTANTS.UPDATE_ACCOUNT_BALANCE.method,
                requestData
            );

            if (response.ok) {
                setSuccess(true);
                setMessage('Balance updated successfully.');
            }
            else {
                setSuccess(false);
                setMessage('Error updating balance. Please check the Account ID and balance value.');
            }
        }
        catch (error) {
            console.error('Error updating balance:', error);
            setSuccess(false);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <Card style={{ width: '24rem' }}>
            <Card.Body>
                <Card.Title>Update Account Balance</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="accountId">
                        <Form.Label>Account ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Account ID"
                            value={accountId}
                            onChange={(e) => setAccountId(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="newBalance">
                        <Form.Label>New Balance</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter New Balance"
                            value={newBalance}
                            onChange={(e) => setNewBalance(e.target.value)}
                        />
                    </Form.Group>

                    <div className="mt-3 mb-3">
                        <Button variant="primary" type="submit">
                            Update Balance
                        </Button>
                    </div>
                </Form>

                {message && (
                    <Alert variant={success ? 'success' : 'danger'}>{message}</Alert>
                )}
            </Card.Body>
        </Card>
    );
};

export default UpdateAccountBalance;