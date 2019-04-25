import { ISearchReposParams } from "@services/github/api";
import { ActionCreator } from "redux";

/**
 * IActionsM 定义action返回值
 */
export interface IActionsM {
    [index: string]: ActionCreator<any>;
    getBooksListAction: () => Promise<{}>;
    searchGithub: (params: ISearchReposParams) => Promise<number>;
}

function actionCreators(NS: string) {
    return {
        getBooksListAction: () => {
            return {
                type: `${NS}/getBooksList`,
            };
        },
        searchGithub: ({ q, sort, order }: ISearchReposParams) => {
            return {
                type: `${NS}/searchRepos`,
                payload: {
                    q,
                    sort,
                    order,
                },
            };
        },
    };
}

export default actionCreators;
