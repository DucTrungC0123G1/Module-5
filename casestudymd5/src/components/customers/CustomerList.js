import React, {useEffect, useState} from "react";
import {getCustomerList} from "../../service/customer_service";
import {Link} from "react-router-dom";
import CustomerDelete from "./CustomerDelete";
import {getCustomerType} from "../../service/customer_type";

export function CustomerList() {
    const [customer, setCustomer] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState();
    const [nameSearch, setNameSearch] = useState("");
    const [searchType, setSearchType] = useState("");
    const [customerType,setCustomerType] = useState([]);


    const getCustomer = async () => {
        const data = await getCustomerList(nameSearch,searchType);
        setCustomer(data)
        console.log("---------load customer-----")
        console.log(customer)
    }
    const loadCustomerType = async ()=>{
        const data = await getCustomerType(searchType);
        setCustomerType(data)
        console.log("----------load type customer-------------")
        console.log(customerType)
    }

    useEffect(() => {
        getCustomer()
        loadCustomerType()
    }, [nameSearch,searchType]);

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
        const typeSearch = document.getElementById("typeSearch").value;
        setSearchType(typeSearch);
        setNameSearch(nameSearch);
        console.log("_____load id type")
        console.log(typeSearch)
    }

    return (
        customer && (
            <>
                <h1 className="title">List Customer</h1>

                <div className="container">
                    <div className="form-outline" style={{display: 'flex'}}>
                        {/*onChange={(evt)=>{setNameSearch(evt.target.value)}}*/}
                        <Link className="btn btn-outline-primary" to="/customers/create">Add</Link>
                        <input style={{marginLeft: '70%', width: '15%'}} type="text" id="nameSearch"
                               className="form-control" placeholder="Search Name"/>
                        <div>
                            <select style={{width:'100%'}} id="typeSearch" className="form-select" aria-label="Default select example">
                                <option value="">Select</option>
                                {customerType.map((customerType) => (
                                    <option key={customerType.id} value={customerType.id}>{customerType.name}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={() => getSearch()}>
                            <i className="fas fa-search"/>
                        </button>
                    </div>
                    <table className="table" style={{marginTop:'200px'}}>
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