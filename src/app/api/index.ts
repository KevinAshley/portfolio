export const apiFetchWrapper = ({
    uri,
    method,
    body,
}: {
    uri: string;
    method: "POST" | "PUT" | "GET";
    body?: { [key: string]: any };
}) => {
    return fetch(uri, {
        method: method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then((r) => r.json())
        .then((response) => {
            if (response.error) {
                throw new Error(response.error);
            }
            return response;
        });
};
