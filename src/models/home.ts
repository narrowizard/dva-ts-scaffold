import { BookListResult } from "@definitions/anyapi/books";
import { IModel } from "@definitions/global";
import { IHome } from "@definitions/state";
import { getBooksList } from "@services/anyapi/books";
import { EffectsCommandMap } from "dva";
import { AnyAction } from "redux";

export const NS = "home";

const M: IModel & {
    state: IHome,
} = {
    namespace: NS,

    state: {
        info: 111,
        books: new BookListResult(),
    },

    effects: {
        *getBooksList({ }, { put, call }: EffectsCommandMap) {
            const data = yield call(getBooksList);
            if (data) {
                yield put({
                    type: "setBookList",
                    payload: {
                        data,
                    },
                });
            }
        },
    },
    reducers: {
        setBookList(state: IHome, { payload }: AnyAction) {
            return {
                ...state,
                books: payload.data,
            };
        },
    },
};

export default M;
