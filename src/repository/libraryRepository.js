import axios from '../custom-axios/axios';

const libraryService = {
    fetchBooks: () => {
        return axios.get("/books")
    },
    fetchCategories: () => {
        return axios.get("/categories")
    },
    getAddPage: () => {
        return axios.get("/books/add")
    },
    addBook: (name, category, authorId, availableCopies) => {
        return axios.post("/books/add", {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        });
    },
    deleteBook: (id) => {
        return axios.get(`/books/delete/${id}`)
    },
    getEditPage: (id) => {
        return axios.get(`/books/edit/${id}`)
    },
    editBook: (id, name, category, newAuthorId, availableCopies) => {
        return axios.post("/books/edit", {
            "id": id,
            "name": name,
            "category": category,
            "newAuthorId": newAuthorId,
            "availableCopies": availableCopies
        })
    },
    markAsTaken: (id) => {
        return axios.get(`/books/markAsTaken/${id}`)
    },
    getAddAuthorPage: () => {
        return axios.get("/addAuthor")
    },
    getAllAuthors: () => {
        return axios.get("/authors")
    },
    addAuthor: (name, surname, countryId) => {
        return axios.post("/addAuthor", {
            "name": name,
            "surname": surname,
            "countryId": countryId
        })
    },
    addCountry:(name,continent)=>{
        return axios.post("/addCountry",{
            "name":name,
            "continent":continent
        })
    }



}
export default libraryService;