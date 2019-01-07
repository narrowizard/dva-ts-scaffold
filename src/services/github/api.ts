import { getGithub } from "@services/common/proxy";

export interface ISearchReposParams { q: string; sort: string; order: "asc" | "desc"; }

export function searchGithub({ q, sort, order }: ISearchReposParams) {
    return getGithub("/search/repositories", {
        q,
        sort,
        order,
    });
}
