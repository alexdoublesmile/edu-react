export function useResource() {
    return {
        posts: wrapPromise(fetchPosts()),
        users: wrapPromise(fetchUsers())
    }
};

function fetchPosts() {
    return delay(2000)
        .then(() =>
            fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        )
        .then((resp) => resp.json());
};

const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
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

async function fetchUsers() {
    await delay(750);
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    return await resp.json();
};