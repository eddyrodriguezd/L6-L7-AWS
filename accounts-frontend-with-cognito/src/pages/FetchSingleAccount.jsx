import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ApiUtil from '../api/ApiUtil';
import { API_CONSTANTS } from '../api/ApiConstants';

const FetchSingleAccount = () => {
    const [accountId, setAccountId] = useState('');
    const [accountData, setAccountData] = useState(null);

    const fetchAccountData = async () => {
        try {
            const response = await ApiUtil.apiCall(
                API_CONSTANTS.GET_ACCOUNT_BY_ID.url.replace(':account_id', accountId),
                API_CONSTANTS.GET_ACCOUNT_BY_ID.method
            );
            console.log(`Response from FetchSingleAccount: ${response}`);

            if (response.ok) {
                const data = await response.json();
                setAccountData(data);
            }
            else {
                setAccountData(null);
                alert('Account not found. Please check the Account ID.');
            }
        } catch (error) {
            console.error('Error fetching account data:', error);
        }
    };

    useEffect(() => {
        if (accountId) {
            fetchAccountData();
        }
    }, [accountId]);

    return (
        <Card style={{ width: '24rem' }}>
            <Card.Body>
                <Card.Title>Fetch Single Account</Card.Title>
                <Form>
                    <Form.Group controlId="accountId">
                        <Form.Label>Account ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="863e9631-c8bf-4448-b8be-3d1fe302d180"
                            value={accountId}
                            onChange={(e) => setAccountId(e.target.value)}
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="button"
                        onClick={fetchAccountData}
                    >
                        Search
                    </Button>
                </Form>

                {accountData && (
                    <div className="mt-3">
                        <h4>Account Details</h4>
                        <p>ID: {accountData.id}</p>
                        <p>Given Name: {accountData.user.givenName}</p>
                        <p>Last Name: {accountData.user.lastName}</p>
                        <p>Balance: {accountData.balance}</p>
                        <p>Created at: {accountData.createdAt}</p>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default FetchSingleAccount;
