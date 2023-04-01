import React from "react";
import PropTypes from "prop-types";

const Post = ({ posts, match }) => {
    const post = posts.find((post) => post.id === match.params.postId);

    return <>{post ? post.label : "no post with this id"}</>;
};

Post.propTypes = {
    posts: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
};

export default Post;
