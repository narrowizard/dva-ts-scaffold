import { ISearchReposParams } from "@services/github/api";

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
