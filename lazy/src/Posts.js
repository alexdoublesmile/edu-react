import React from "react";

const Posts = ({ resource }) => {
    const posts = resource.posts.read();

    return ( 
        <>
            <h3>Posts</h3>
            <ul>

            </ul>
        </>
    );
}
 
export default Posts;