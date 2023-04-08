import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

const Comments = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((data) => setComments(data));
    }, []);

    const handleSubmit = (data) => {
        api.comments
            .add({ ...data, pageId: userId })
            .then((data) => setComments([...comments, data]));
    };

    const handleRemoveComment = (id) => {
        api.comments
            .remove(id)
            .then(id => {
                setComments(comments.filter(comment => comment.id !== id));
            });
    };

    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);

    return (
        <>
            <div className="card mb-2">
                {" "}
                <div className="card-body">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
                {sortedComments.length > 0 && (
                    <div className="card mb-3">

                    </div>
                )}
            </div>
        </>
    );
};

 
export default Comments;