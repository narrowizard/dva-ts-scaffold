import { IModel } from "@definitions/global";
import { IHome } from "@definitions/state";
import { EffectsCommandMap } from "dva";
import { AnyAction } from "redux";

export const NS = "home";

const M: IModel & {
    state: IHome,
} = {
    namespace: NS,

    state: {
        info: 111,
    },

    effects: {

    },
};

export default M;
