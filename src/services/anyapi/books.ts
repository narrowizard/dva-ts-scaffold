import { AnyApiKey } from "@config/constant";
import { getBooks } from "../common/proxy";

export function getBooksList() {
    return getBooks("/lists/names.json", {
        "api-key": AnyApiKey,
    });
}
