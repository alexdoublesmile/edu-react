export function useResource() {
    return {
        posts: fetchPosts()
    }
};

function fetchPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(resp => resp.json());
};

function wrapPromise(promise) {
    let status = "pending";
    let result;
    const suspender = promise.then(resp => {
        result = resp;
        status = "success";
    }, e => {
        result = e;
        status = "error";
    });

    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        }
    };
};