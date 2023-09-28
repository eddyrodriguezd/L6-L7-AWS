const API_URL = "https://374kdxqcw9.execute-api.eu-central-1.amazonaws.com/dev";

export const API_CONSTANTS = {
    CREATE_ACCOUNT: {
        url: `${API_URL}/accounts`,
        method: 'POST',
    },
    GET_ACCOUNT_BY_ID: {
        url: `${API_URL}/accounts/:account_id`,
        method: 'GET',
    },
    UPDATE_ACCOUNT_BALANCE: {
        url: `${API_URL}/accounts/:account_id`,
        method: 'PUT',
    }
};
