import React from "react";
import PropTypes from "prop-types";

const Post = ({ posts, id }) => {
    const post = posts.find((post) => post.id === id);

    return <>{post ? post.label : "no post with id " + id}</>;
};

Post.propTypes = {
    posts: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
};

export default Post;
