function actionCreators(NS: string) {
    return {
        getBooksListAction: () => {
            return {
                type: `${NS}/getBooksList`,
            };
        },
    };
}

export default actionCreators;
