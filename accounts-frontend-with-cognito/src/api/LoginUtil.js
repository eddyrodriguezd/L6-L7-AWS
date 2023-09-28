import { LOGIN_CONSTANTS } from '../api/LoginConstants';

class LoginUtil {

    static async login(username, password) {
        const loginFormData = new URLSearchParams({
            response_type: 'code',
            client_id: LOGIN_CONSTANTS.CLIENT_ID,
            scope: 'aws.cognito.signin.user.admin',
            redirect_uri: LOGIN_CONSTANTS.REDIRECT_URI,
            username,
            password,
        });

        const loginResponse = await fetch('https://l7-prep-domain.auth.eu-central-1.amazoncognito.com/login?response_type=code&client_id=6b8f0ru57or32han4kdnh5kt5l&scope=aws.cognito.signin.user.admin&redirect_uri=https%3A%2F%2Flocalhost%3A8090', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        if (loginResponse.ok) {
            const loginData = await loginResponse.json();
            const authorizationCode = loginData.code;
            const tokens = await exchangeAuthorizationCodeForTokens(authorizationCode);
            return tokens;
        }
        else {
            throw new Error('Login failed');
        }
    }

    // Exchange the authorization code for tokens
    static async exchangeAuthorizationCodeForTokens(authorizationCode) {
        const tokenFormData = new URLSearchParams({
            grant_type: 'authorization_code',
            code: authorizationCode,
            client_id: LOGIN_CONSTANTS.CLIENT_ID,
            redirect_uri: LOGIN_CONSTANTS.REDIRECT_URI,
        });

        const tokenResponse = await fetch(LOGIN_CONSTANTS.TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: tokenFormData,
        });

        if (tokenResponse.ok) {
            const tokenData = await tokenResponse.json();
            return tokenData;
        } else {
            throw new Error('Token exchange failed');
        }
    }
}

export default LoginUtil;