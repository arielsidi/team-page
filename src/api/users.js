// @flow

import { getPage } from "../util/pagination";

export const getUsers = (): Promise<Array<Object>> => {
    let headers: Headers = new Headers();
    headers.append("Authorization", `Basic ${String(process.env.credentials)}`);

    return fetch(`${String(process.env.API_URL)}/users`, {
        method: "GET",
        headers
    }).then((response: Object) => response.json());
};

export const getUsersPaginated = (
    ItemsPerPage: number,
    currentPage: number
) => {
    return getUsers().then(users => ({
        users: getPage(users, ItemsPerPage, currentPage),
        pageCount: Math.ceil(users.length / ItemsPerPage)
    }));
};
