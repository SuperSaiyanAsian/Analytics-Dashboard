export function authenticate(userEmail: any, userPass: any, authToken: string) {
    return fetch("https://i7chxuz5u5.us-west-2.awsapprunner.com/authenticate", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
                'Authorization': authToken,
			},
			body: JSON.stringify({
				email: userEmail,
				password: userPass,
			}),
		});
}