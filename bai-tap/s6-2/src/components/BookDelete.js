import {removeBook} from "../service/bookService";
import {toast} from "react-toastify";

export function BookDelete(props) {
    const {isModalShow ,selectedBook ,closeModal }=props
    //
    // const {isModalShow,selectedBook}=props;
    const handleDelete= async (book) =>{
        const rs = await removeBook(book.id);
        if (rs.status===200){
            closeModal();
            toast("ok")
        }
    }

    return (
        isModalShow &&
        (
            <>
                <div className="modal" tabIndex="-1" style={{display:'block'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close" onClick={closeModal} ></button>
                            </div>
                            <div className="modal-body">
                                <p>Do you want to delete {selectedBook.title}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal} >Close</button>
                                <button type="button" className="btn btn-primary" onClick={()=>handleDelete(selectedBook)}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
        )
}
export default BookDelete;
