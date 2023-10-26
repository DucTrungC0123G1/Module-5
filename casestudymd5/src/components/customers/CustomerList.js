import React, {useEffect, useState} from "react";
import {getCustomerList} from "../../service/customer_service";
import {Link} from "react-router-dom";
import CustomerDelete from "./CustomerDelete";

export function CustomerList() {
    const [customer, setCustomer] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState();
    const getCustomer = async () => {
        const res = await getCustomerList();
        setCustomer(res)
        console.log(customer)
    }
    useEffect(() => {
        getCustomer()
    }, []);

    const handleModal = (c) => {
        setModalStatus(true);
        setSelectedCustomer(c);
    }
    const closeModal = () => {
        setModalStatus(false);
        getCustomer();
    }

    return (
        customer && (
            <>
                <h1 className="title">List Customer</h1>
                <Link className="btn btn-outline-primary" to="/customers/create">Add</Link>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr id="header">
                            <th>#</th>
                            <th>Name</th>
                            <th>Date Of Birth</th>
                            <th>Gender</th>
                            <th>Identity Card Number</th>
                            <th>Number Phone</th>
                            <th>Customer Type</th>
                            <th>Location</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customer.map((c, index) => (
                            <tr key={c.id}>
                                <td>{index + 1}</td>
                                <td>{c.name}</td>
                                <td>{c.dob}</td>
                                <td>{c.gender ? "Male" : "Female"}</td>
                                <td>{c.identity}</td>
                                <td>{c.phone}</td>
                                <td>{c.customerType.name}</td>
                                <td>{c.location}</td>
                                <td><Link className="btn btn-outline-primary" to={`/customers/edit/${c.id}`}>Edit</Link>
                                    <button onClick={() => handleModal(c)}
                                            className="btn btn-outline-danger">Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                </div>
                <CustomerDelete
                    isModalShow={modalStatus}
                    selectedCustomer={selectedCustomer}
                    closeModal={closeModal}
                >
                </CustomerDelete>
            </>
        )
    )

}

export default CustomerList;