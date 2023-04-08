import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {

    }, []);

    const handleSubmit = (data) => {

    };

    const handleRemoveComment = (id) => {

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