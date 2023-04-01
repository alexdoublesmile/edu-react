import React from "react";
import PropTypes from "prop-types";

const PostList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <h3 key={post.id}>{post.label}</h3>
            ))}
        </>
    );
};

PostList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostList;
