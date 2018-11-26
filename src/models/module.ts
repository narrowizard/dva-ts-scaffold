import { EffectsCommandMap } from "dva";
import { AnyAction } from "redux";
import { getModules } from "../services/layout/menu";

const NS = "module";

interface IState {

}

export default {
    namespace: NS,

    state: {

    },

    effects: {
        *getModules(action: AnyAction, saga: EffectsCommandMap) {
            const data = yield saga.call(getModules);
            if (data) {
                yield saga.put({
                    type: "setModules",
                    payload: {
                        data,
                    },
                });
            }
        },
    },

    reducers: {
        setModules(state: IState, action: AnyAction) {
            return {
                ...state,
                modules: action.payload.data,
            };
        },
    },
};
