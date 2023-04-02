import React from "react";
import PostList from "./postList";
import Post from "./post";
import query from "query-string";
import { useLocation, useParams } from "react-router-dom";

const Posts = () => {
    const params = useParams();
    const location = useLocation();
    const posts = [
        {
            id: "1",
            label: "post 1"
        },
        {
            id: "2",
            label: "post 2"
        },
        {
            id: "3",
            label: "post 3"
        }
    ];

    const { postId } = params;
    const queryString = query.parse(location.search);
    console.log(queryString);

    return (
        <>
            {postId
                ? <Post id={postId} posts={posts} />
                : <PostList posts={posts} />
            }
        </>
    );
};

export default Posts;
