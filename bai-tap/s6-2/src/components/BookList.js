import React, {useEffect, useState} from 'react';
import {Formik} from "formik";
import {getAll} from "../service/bookService";
import {Link} from "react-router-dom";
import BookDelete from "./BookDelete";

export function BookList() {
    const [books, setBooks] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [selectedBook, setSelectedBook] = useState()
    const getBook = async () => {
        const res = await getAll();
        setBooks(res)
        console.log(books)
    }

    const closeModal = () => {
        setModalStatus(false);
        getBook();

    }
    useEffect(() => {
        getBook()
    }, []);
    //
    //
    const handleModal = (b) => {
        setModalStatus(true);
        setSelectedBook(b);
    }

    console.log(selectedBook)
    console.log(modalStatus)
    return (
        books && (
            <>
                <h1>Library</h1>
                <Link className="btn btn-outline-primary" to="/add">Add</Link>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        books.map((b) => (
                            <tr key={b.id}>
                                <td>{b.title}</td>
                                <td>{b.quantity}</td>
                                <td><Link className="btn btn-outline-primary" to={`/edit/${b.id}`}>Edit</Link></td>
                                <td>
                                    <button onClick={() => handleModal(b)} className="btn btn-outline-danger">Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
                <BookDelete
                    isModalShow={modalStatus}
                    selectedBook={selectedBook}
                    closeModal={closeModal}
                >
                </BookDelete>
            </>
        )
    )
}

export default BookList;
