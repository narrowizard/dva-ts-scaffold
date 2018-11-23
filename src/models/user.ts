import { login } from '../services/user/user';

const NS = 'user';

export default {
    namespace: NS,

    state: {

    },

    effects: {
        *login({ payload }, { call, put }) {
            const data = yield call(login)
        }
    }
}