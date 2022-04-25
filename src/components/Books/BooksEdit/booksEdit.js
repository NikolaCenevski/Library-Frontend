import React from 'react';
import {useHistory} from 'react-router-dom';

const BooksEdit = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: props.book.name,
        category: "NOVEL",
        newAuthorId: 1,
        availableCopies:0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !== 0 ? formData.category : props.book.category;
        const newAuthorId = formData.newAuthorId;
        const availableCopies = formData.availableCopies !==0? formData.availableCopies : props.book.availableCopies;
        props.onEditBook(props.book.id, name, category, newAuthorId,availableCopies);
        history.goBack("/books");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Product name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Writer</label>
                        <select name="newAuthorId" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option selected value={term.id}>{term.authorName}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               placeholder="Enter available copies"
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BooksEdit;
