export default (user: any, pass: any) => Buffer.from(`${user}:${pass}`).toString('base64');
