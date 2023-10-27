import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {editContract, getContractById} from "../../service/contract_service";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";

export function ContractEdit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [contract, setContract] = useState(null);

    const findContractId = async () => {
        const rs = await getContractById(id)
        setContract(rs)
    }
    useEffect(() => {
        findContractId()
    },[id])
    if (!contract) {
        return null;
    }
    const updateContract = async (data) => {
        const rs = await editContract(data)
        console.log("status---------")
        console.log(rs)
        if (rs.status === 200) {
            navigate("/contracts")
            toast("Update Success")
        } else {
            toast("Update Error")
        }
    }

    const initValue = {
        id:contract?.id,
        code: contract?.code,
        dateStart: contract?.dateStart,
        dateEnd: contract?.dateEnd,
        depositMoney: contract?.depositMoney,
        totalMoney: contract?.totalMoney,
    }
    const validateObject = {
        code: Yup.string()
            .required("Code do not empty"),
        dateStart: Yup.string()
            .required("Date do not empty"),
        dateEnd: Yup.string()
            .required("Date do not empty"),
        depositMoney: Yup.string()
            .required("Do not empty")
            .min(1, "Money must be greater than 0"),
        totalMoney: Yup.string()
            .required("Do not empty")
            .min(1, "Money must be greater than 0"),
    }
    return (
        <>
            <h1 className="title">Edit Contract</h1>
            <Formik
            initialValues={initValue}
            validationSchema={Yup.object(validateObject)}
            onSubmit={(values) => {
                updateContract(values)
            }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <Form>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="Code">Code Contract</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="code" name="code" type="text"/>
                                    <ErrorMessage name="code" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="dateStart">Date Start</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="dateStart" name="dateStart" type="date"/>
                                    <ErrorMessage name="dateStart" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="dateEnd">Date End</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="dateEnd" name="dateEnd" type="date"/>
                                    <ErrorMessage name="dateEnd" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="depositMoney">Deposit Money</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="depositMoney" name="depositMoney" type="text"/>
                                    <ErrorMessage name="depositMoney" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="totalMoney">Total Money</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="totalMoney" name="totalMoney" type="text"/>
                                    <ErrorMessage name="totalMoney" className="text-danger" component="span"/>
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                    <div>
                                        <Link to={"/contracts"}>
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
export default ContractEdit;