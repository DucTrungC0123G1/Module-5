import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {editCustomer, getCustomerById} from "../../service/customer_service";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import {getCustomerType} from "../../service/customer_type";

export function CustomerEdit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [customerType, setCustomerType] = useState([]);
    const [customer, setCustomer] = useState(null)
    const loadCustomerType = async () => {
        const rs = await getCustomerType();
        setCustomerType(rs);
    }
    useEffect(() => {
        findCustomerId()
        loadCustomerType()
    }, [id])

    const findCustomerId = async () => {
        const rs = await getCustomerById(id)
        setCustomer(rs)
    }
    const updateCustomer = async (data) => {
        // const rsp = {...data,customerType:JSON.parse(data.customerType)}
        const rs = await editCustomer(data)
        if (rs.status === 200) {
            console.log(rs)
            navigate("/customers")
            toast("Update Success")
        } else {
            toast("Update Error")
        }

    }
    if (!customer) {
        return null;
    }
    const initValue = {
        name: customer?.name,
        dob: customer?.dob,
        gender: customer?.gender,
        identity: customer?.identity,
        phone: customer?.phone,
        email: customer?.email,
        customerType: customer?.customerType,
        location: customer?.location
    }
    // const validateObject = {
    //     name: Yup.string()
    //         .required("name can not empty")
    //         .matches(/^(?:[A-Z][a-z]*\s?)+$/, "Customer names cannot contain numbers. And the first letters of each word must be capitalized."),
    //     dob: Yup.string()
    //         .required("dob can not empty"),
    //     gender: Yup.string()
    //         .required("gender can not empty"),
    //     identity: Yup.string()
    //         .required("identity can not empty")
    //         .matches(/^[0-9]{9}$|^[0-9]{12}$/, "identity must be correct the format"),
    //     phone: Yup.string()
    //         .required("phone can not empty"),
    //     email: Yup.string()
    //         .required("email can not empty")
    //         .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "email must be correct the format"),
    //     customerType: Yup.string()
    //         .required("type can not empty"),
    //     location: Yup.string()
    //         .required("location can not empty")
    // }
    return (
        <>
            <h1>Edit Customer</h1>
            <Formik initialValues={initValue}
                    // validationSchema={Yup.object(validateObject)}
                    onSubmit={(values) => {
                        console.log("---------------------------------------------------")
                        console.log(values);
                        updateCustomer(values)
                    }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <Form>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="name">Name</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="name" name="name" type="text"/>
                                    <ErrorMessage name="name" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="dob">Date Of Birth</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="dob" name="dob" type="date"/>
                                    <ErrorMessage name="dob" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="gender">Gender</label>
                                    </h6>
                                    <Field as="select" className="form-control mt-2" id="gender" name="gender">
                                        <option value={""}>-Option-</option>
                                        <option value={true}>Male</option>
                                        <option value={false}>Female</option>
                                    </Field>
                                    <ErrorMessage name="gender" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="identity">Identity</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="identity" name="identity" type="text"/>
                                    <ErrorMessage name="identity" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="phone">Phone</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="phone" name="phone" type="text"/>
                                    <ErrorMessage name="phone" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="email">Email</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="email" name="email" type="text"/>
                                    <ErrorMessage name="email" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="customerType">Customer Type</label>
                                    </h6>
                                    <Field as="select" className="form-control mt-2" id="customerType"
                                           name="customerType">
                                        {customerType.map((customerType) => (
                                            <option key={customerType.id}
                                                    value={JSON.stringify(customerType)}>{customerType.name}</option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="location">Location</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="location" name="location" type="text"/>
                                    <ErrorMessage name="location" className="text-danger" component="span"/>
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                    <div>
                                        <Link to={"/customers"}>
                                            <button className="btn btn-warning">Cancel</button>
                                        </Link>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Formik>
        </>

    )
}