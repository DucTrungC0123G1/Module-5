import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";
import * as Yup from "yup"
import {toast} from "react-toastify";


function Contact() {
    // const navigate = useNavigate();
    const initValue = {
        name: "",
        email:"",
        phone:"",
        message:""
    };
    const validateObject = {
        name:Yup.string()
            .required("Không được để trống"),
        email: Yup.string()
            .required("không được để trống")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "email không đúng định dạng"),
        phone: Yup.string()
            .required("Không để trống"),
        message: Yup.string()
            .required('không được để trống')
    };

    return (
        <>
            <Formik
            initialValues={initValue}
            onSubmit={(values) => {
                console.log(values)
                toast.warn("Submit Thành Công");
                // navigate("/contact");
            }}
            validationSchema={Yup.object(validateObject)}
            >
                <div className="container">
                    <h1>Contact Form</h1>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <Field type="text" name="name" className="form-control" id="name"/>
                            <ErrorMessage  name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Email</label>
                            <Field type="text" name="email" className="form-control" id="email"/>
                            <ErrorMessage  name="email" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Phone</label>
                            <Field type="text" name="phone" className="form-control" id="phone"/>
                            <ErrorMessage  name="phone" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <Field type="text-area" name="message" className="form-control"/>
                            <ErrorMessage  name="message" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <button type="submit" className="btn btn-primary"> Submit</button>
                    </Form>
                </div>
            </Formik>

        </>

    )

}

export default Contact;