import { EffectsCommandMap } from "dva";
import { AnyAction } from "redux";
import { login } from "../services/user/user";

const NS = "user";

export default {
    namespace: NS,

    state: {

    },

    effects: {
        *login(action: AnyAction, saga: EffectsCommandMap) {
            return yield saga.call(login, action.payload);
        },
    },
};
