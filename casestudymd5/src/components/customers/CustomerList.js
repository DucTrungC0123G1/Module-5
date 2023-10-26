import React, {useEffect, useState} from "react";
import {getCustomerList} from "../../service/customer_service";
import {Link} from "react-router-dom";
import CustomerDelete from "./CustomerDelete";
import {Field} from "formik";

export function CustomerList() {
    const [customer, setCustomer] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState();
    const [nameSearch, setNameSearch] = useState("");
    const getCustomer = async () => {
        const data = await getCustomerList(nameSearch);
        setCustomer(data)
        console.log(customer)
    }
    useEffect(() => {
        getCustomer()
    }, [nameSearch]);

    const handleModal = (c) => {
        setModalStatus(true);
        setSelectedCustomer(c);
    }
    const closeModal = () => {
        setModalStatus(false);
        getCustomer();
    }
    const getSearch = () => {
        const nameSearch = document.getElementById("nameSearch").value;
        setNameSearch(nameSearch);
    }
    return (
        customer && (
            <>
                <h1 className="title">List Customer</h1>
                <Link className="btn btn-outline-primary" to="/customers/create">Add</Link>
                <div className="container">
                    <div className="form-outline" style={{display: 'flex'}}>
                        {/*onChange={(evt)=>{setNameSearch(evt.target.value)}}*/}
                        <input style={{marginLeft: '70%', width: '30%'}} type="text" id="nameSearch"
                               className="form-control" placeholder="Search Name"/>
                        <button type="submit" className="btn btn-primary" onClick={() => getSearch()}>
                            <i className="fas fa-search"/>
                        </button>
                    </div>
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

                        {customer.length !== 0 ?
                            customer.map((c, index) => (
                                <tr key={c.id}>
                                    <td>{index + 1}</td>
                                    <td>{c.name}</td>
                                    <td>{c.dob}</td>
                                    <td>{c.gender ? "Male" : "Female"}</td>
                                    <td>{c.identity}</td>
                                    <td>{c.phone}</td>
                                    <td>{c.customerType.name}</td>
                                    <td>{c.location}</td>
                                    <td><Link className="btn btn-outline-primary"
                                              to={`/customers/edit/${c.id}`}>Edit</Link>
                                        <button onClick={() => handleModal(c)}
                                                className="btn btn-outline-danger">Delete
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <td><b>No data</b></td>
                            )
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