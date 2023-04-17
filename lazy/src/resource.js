function fetchPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(resp => resp.json());
};