import React from "react";
import PropTypes from "prop-types";
import PostList from "./postList";
import Post from "./post";

const Posts = ({ match }) => {
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

    const postId = match.params.postId;

    return (
        <>
            {postId
                ? <Post id={postId} posts={posts} />
                : <PostList posts={posts} />
            }
        </>
    );
};

Posts.propTypes = {
    match: PropTypes.object.isRequired
};

export default Posts;
