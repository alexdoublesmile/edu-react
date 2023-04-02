import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <h3>{post.label}</h3>
                </Link>
            ))}
        </>
    );
};

PostList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostList;
