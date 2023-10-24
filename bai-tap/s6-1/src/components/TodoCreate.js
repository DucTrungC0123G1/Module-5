import React, {useEffect} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router";
import *as Yup from "yup";
import {addTodo} from "../service/TodoService";

export function TodoCreate() {
    const navigate = useNavigate();
    useEffect(() => {

    }, [])
    const callCreate = async (todo) => {
     const res = await addTodo(todo)
        if (res.status===201){
            navigate("/")
        }else {
            alert("error")
        }
    }


    const initValue = {
        userId: 0,
        title: "",
        completed: false
    };
    // const validateObject = {
    //     userId: Yup.string()
    //         .required("Do not empty"),
    //     title: Yup.string()
    //         .required("Do not empty"),
    // }
    return (
        <>
            <Formik initialValues={initValue}
                    onSubmit={(values) => {
                        callCreate(values)
                    }}
                // validationSchema={Yup.object(validateObject)
                // }
            >

                <div className="container">
                    <h1>Todo</h1>
                    <Form>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">User Id</label>
                            <Field type="text" name="userId" className="form-control mb-3"/>
                            <ErrorMessage name="userId" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Title</label>
                            <Field type="text" name="title" className="form-control mb-3"/>
                            <ErrorMessage name="title" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Completed</label>
                            <Field type="radio" value="Yes" name="completed"/>
                            <Field type="radio" value="No" name="completed"/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}