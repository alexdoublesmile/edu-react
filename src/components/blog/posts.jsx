import React from "react";
import PropTypes from "prop-types";
import PostList from "./postList";
import Post from "./post";
import query from "query-string";

const Posts = ({ match, location, history }) => {
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

    const queryString = query.parse(location.search);
    const postId = match.params.postId;
    console.log(queryString);

    return (
        <>
            {postId
                ? <Post id={postId} posts={posts} history={history} />
                : <PostList posts={posts} />
            }
        </>
    );
};

Posts.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default Posts;
