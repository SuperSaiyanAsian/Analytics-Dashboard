import encode from '$lib/utils/encode.js';
import { authenticate } from '$lib/server/authenticate.js';
        
export function load({ cookies }) {
	const userToken = cookies.get('userAuthToken');

	return {
		userToken
	};
}

export const actions= {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

        const email = data.get('email')
        const pass = data.get('password')

        const authToken = 'Basic ' + encode(email, pass);
		
        const response = await authenticate(email, pass, authToken);

        if (response.ok) {
            const responseData = await response.json();
            const token = responseData.token;
    
            cookies.set('userAuthToken', token, { path: '/' });
        }

        return { 
            receivedResponse: true,
            success: response.ok
        }
	}
};