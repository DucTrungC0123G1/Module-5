import {editBook, findById} from "../service/bookService";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";

export function BookEdit() {
    const {id} = useParams();
    const navigate = useNavigate()
    const [book,setBook] =useState(null)

    useEffect(()=>{
        findBookById()
    },[id])

    const findBookById =async ()=>{
        const rs = await findById(id)
        setBook(rs)
    }

    const updateBook = async (data)=>{
        const rs = await editBook(data)
        if (rs.status===200){
            navigate("/")
            toast("edit success")
        }else {
            toast("edit error")
        }
    }

    if (!book){
        return null;
    }
    return(
        <>
            <h1>Edit Book</h1>
            <Formik initialValues={{
               ...book
            }} onSubmit={(value)=>{
                updateBook(value)
            }}>

                <div className="container px-5 my-5">
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="title">Title</label>
                            <Field className="form-control" name="title" id="title" type="text" placeholder="Title" data-sb-validations="" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="quantity">Quantity</label>
                            <Field className="form-control" name="quantity" id="quantity" type="text" placeholder="Quantity" data-sb-validations="" />
                        </div>

                        <div className="d-grid">
                            <button className="btn btn-primary " id="submitButton" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>

            </Formik>
        </>
    )

}
