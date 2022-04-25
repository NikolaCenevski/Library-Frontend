import React from 'react';
import {Link} from 'react-router-dom';

const BooksTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.authorName}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <a title={"Edit"} className={"btn btn-info ml-2"}
                      onClick={() =>props.onEdit(props.term.id)}
                      href={`/books/edit/${props.term.id}`}>
                    Edit
                </a>
                <a title={"Mark as taken"} className={"btn btn-info"}
                   onClick={() => props.onMarkAsTaken(props.term.id)}>
                    Mark as taken
                </a>
            </td>
        </tr>
    )
}

export default BooksTerm;
