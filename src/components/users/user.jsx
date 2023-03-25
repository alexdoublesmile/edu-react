import React from 'react';
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = props => {
    const deleteButtonText = "delete";
    const getDeleteButtonClasses = () => "btn btn-danger";

    const renderQualities = qualities => qualities.map(quality => {
        return (
            <Quality 
                key={quality._id} 
                {...quality} 
            />
        );
    });

    return (
        <tr>
            <td>{props.name}</td>
            <td>{renderQualities(props.qualities)}</td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate} / 5</td>
            <td>
                <Bookmark 
                    userId={props._id} 
                    isMarked={props.bookmark} 
                    onMark={props.onMark} 
                />
            </td>
            <td>
                <button
                    className={getDeleteButtonClasses()}
                    onClick={() => props.onDelete(props._id)}
                >
                    {deleteButtonText}
                </button>
            </td>
        </tr>
    );
}

export default User;