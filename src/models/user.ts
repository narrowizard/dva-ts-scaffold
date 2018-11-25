import { login } from '../services/user/user';
import { EffectsCommandMap } from 'dva';
import { AnyAction } from 'redux';

const NS = 'user';

export default {
    namespace: NS,

    state: {

    },

    effects: {
        *login(action: AnyAction, saga: EffectsCommandMap) {
            const data = yield saga.call(login);
            return data;
        }
    }
}