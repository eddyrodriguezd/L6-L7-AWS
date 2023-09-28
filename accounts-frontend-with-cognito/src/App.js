import React from 'react';
import './App.css'
import CreateAccount from './pages/CreateAccount'
import FetchSingleAccount from './pages/FetchSingleAccount';
import UpdateAccountBalance from './pages/UpdateAccountBalance';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import { awsExports } from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_CLIENT_ID,
    usernameAttributes: 'email', // Set this to 'email'
  }
})

const formFields = {
  signIn: {
    username: {
      label: 'Email',
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    username: {
      label: 'Email',
      placeholder: 'Enter your email',
    },
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm Password:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      label: 'Email',
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'Confirmation Code:',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'Confirmation Code:',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

function App() {
  return (
    <Authenticator formFields={formFields}>
      {({ signOut, user }) => (

        <BrowserRouter>
          <div className='App'>
            <NavBar user={user} signOut={signOut} />
            <div className='Content'>
              <Routes>
                <Route path='/' element={<CreateAccount />} />
                <Route path='/create-account' element={<CreateAccount />} />
                <Route path='/retrieve-account' element={<FetchSingleAccount />} />
                <Route path='/update-balance' element={<UpdateAccountBalance />} />
              </Routes>
            </div>

          </div>
        </BrowserRouter>
      )}
    </Authenticator>
  );
}

export default App;
