export function createLoginAction(account: string, password: string) {
    return {
        type: 'user/login',
        payload: {
            account,
            password
        }
    }
}