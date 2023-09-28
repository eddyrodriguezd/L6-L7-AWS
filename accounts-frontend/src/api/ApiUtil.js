class ApiUtil {
    static async apiCall(url, method, data = null) {
        console.log(`Making API ${method} call to ${url} with data: ${data}`);
        try {
            const headers = {
                'Content-Type': 'application/json',
            };

            const requestOptions = {
                method,
                headers,
                body: data ? JSON.stringify(data) : null,
            };

            console.log(`API Request: URL=${url}, Method=${method}, Data=${JSON.stringify(data)}`);

            const response = await fetch(url, requestOptions);

            console.log(`API Response: URL=${url}, Status=${response.status}`);

            return response;
        }
        catch (error) {
            console.error(`API request error: ${error.message}`);
            throw new Error(`API request error: ${error.message}`);
        }
    }
}

export default ApiUtil;