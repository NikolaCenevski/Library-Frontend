import React from 'react';
import BooksTerm from '../BooksTerm/booksTerm';
import {Link} from 'react-router-dom';

const Books = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>Author name</th>
                            <th scope={"col"}>Available copies</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.books.map((term) => {
                            return (
                                <BooksTerm term={term} onDelete={props.onDelete} onEdit={props.onEdit} onMarkAsTaken={props.onMarkAsTaken}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <a
                                className={"btn btn-block btn-dark"} href={"/books/add"}>Add new book</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books;
