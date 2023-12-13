export function authenticate(userEmail: any, userPass: any, authToken: string) {
    return fetch("https://i7chxuz5u5.us-west-2.awsapprunner.com/authenticate", {
		method: "POST",
		credentials: 'include',
		headers: {
			'Authorization': authToken,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: userEmail,
			password: userPass,
		}),
	});
}

export function getDesignModules(query: string, jwt: any) {
	const baseURL = "https://i7chxuz5u5.us-west-2.awsapprunner.com/user-projects/design-modules"
    return fetch(baseURL, {
		method: "GET",
		credentials: 'include',
		headers: {
			'Authorization': jwt,
			'Content-Type': 'application/json',
		},
	});
}