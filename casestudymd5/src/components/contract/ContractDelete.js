import {toast} from "react-toastify";
import React from "react";
import {deleteContract} from "../../service/contract_service";

export function ContractDelete(props) {
    const {isModalShow, selectedContract, closeModal} = props
    const handleDelete = async (contract) => {
        const rs = await deleteContract(contract.id);
        if (rs.status === 200) {
            closeModal();
            toast("Delete Success")
        }
    }
    return (
        isModalShow && (
            <>
                <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Do you want to delete: <b> {selectedContract.code}</b></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={closeModal}>Close
                                </button>
                                <button type="button" className="btn btn-danger"
                                        onClick={() => handleDelete(selectedContract)}>Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ))

}

export default ContractDelete;