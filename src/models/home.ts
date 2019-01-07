import { BookListResult } from "@definitions/anyapi/books";
import { IModel } from "@definitions/global";
import { IHome } from "@definitions/state";
import { getBooksList } from "@services/anyapi/books";
import { searchGithub } from "@services/github/api";
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
        repos: {},
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
        *searchRepos({ payload }: AnyAction, { put, call }: EffectsCommandMap) {
            const data = yield call(searchGithub, payload);
            if (data) {
                yield put({
                    type: "setRepos",
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
        setRepos(state: IHome, { payload }: AnyAction) {
            return {
                ...state,
                repos: payload.data,
            };
        },
    },
};

export default M;
