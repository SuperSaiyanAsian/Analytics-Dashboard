import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
    // Clear user auth token and then redirect to login page
    cookies.delete('userAuthToken', { path: '/' });
    
	throw redirect(308, '/login');
}