// @flow

export const getUsers = (): Promise<Array<Object>> => {
    let headers: Headers = new Headers();
    headers.append("Authorization", `Basic ${String(process.env.credentials)}`);

    return fetch(`${String(process.env.API_URL)}/users`, {
        method: "GET",
        headers
    }).then((response: Object) => response.json());
};
