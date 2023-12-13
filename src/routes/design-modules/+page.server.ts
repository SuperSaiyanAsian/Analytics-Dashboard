import encode from '$lib/utils/encode.js';
import { getDesignModules } from '$lib/server/api.js';
import { redirect } from '@sveltejs/kit';

type QueryOptions = {
	user_id: number;
	project_id: number;
	module_id: number;
	include_deleted: boolean;
	sort: string;
	order: 'ASC' | 'DESC';
	limit: number;
	skip: number;
};

export function load({ cookies }) {
	const userToken = cookies.get('userAuthToken');

    if (!userToken) {
        throw redirect(308, '/login');
    }

	return {
		userToken
	};
}

export const actions= {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
        const query: string = "";
        const userToken = cookies.get('userAuthToken');
		
        const response = await getDesignModules(query, userToken);

        const responseData = await response.json();
        console.log(responseData);

        return { 
            receivedResponse: true,
            success: response.ok,
            resData: responseData
        }
	}
};