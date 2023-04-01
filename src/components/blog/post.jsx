import React from "react";
import PropTypes from "prop-types";

const Post = ({ posts, id, history }) => {
    const post = posts.find((post) => post.id === id);

    const handleSaveClick = () => {
        return history.push("/posts");
        // return history.replace("/posts");
    };

    return (
        <>
            <h2>{post ? post.label : "no post with id " + id}</h2>
            <button onClick={() => handleSaveClick()}>Save</button>
        </>
    );
};

Post.propTypes = {
    posts: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

export default Post;
