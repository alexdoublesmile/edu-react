import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Post = ({ posts, id }) => {
    const history = useHistory();
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
    id: PropTypes.string.isRequired
};

export default Post;
