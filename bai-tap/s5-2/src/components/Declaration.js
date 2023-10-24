import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export function Declaration() {
    const initValue = {
        name: "",
        cmnd: "",
        yearBorn: "",
        gender: "1",
        nationality: "",
        position: "",
        city: "",
        district: "",
        ward: "",
        homeNumber: "",
        phone: "",
        email: "",
        goWhere: "",
        sick: "",
        meet: "",
    }
    const validateObjects = {
        name: Yup.string()
            .required("Không để trống"),
        cmnd: Yup.string()
            .required("Không để trống"),
        yearBorn: Yup.number()
            .required("Không để trống")
            .min(1900, "Vui lòng nhập năm lớn hơn 1900")
            .max(2022, "Vui longf nhập năm nhỏ hơn 2023"),
        nationality: Yup.string()
            .required("Không để trống"),
        city: Yup.string()
            .required("Không để trống"),
        district: Yup.string()
            .required("không để trống"),
        ward: Yup.string()
            .required("không để trống"),
        homeNumber: Yup.string()
            .required("Không để trống"),
        email: Yup.string()
            .required("không để trống")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "email không đúng định dạng"),
    }
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object(validateObjects)
                }
            >
                <div className="container">
                    <h1><b>Tờ Khai Y Tế</b></h1>
                    <Form>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Họ và Tên</label>
                            <Field type="text" id="name" name="name" className="form-control mb-3"/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">CCCD/CMND</label>
                            <Field type="text" id="cmnd" name="cmnd" className="form-control mb-3"/>
                            <ErrorMessage name="cmnd" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Năm Sinh</label>
                            <Field type="text" name="yearBorn" className="form-control mb-3"/>
                            <ErrorMessage name="yearBorn" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Giới Tính</label>
                            <Field type="radio" value="1" name="gender"/>Nam
                            <Field type="radio" value="2" name="gender"/>Nữ
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Quốc Tịch</label>
                            <Field type="text" name="nationality" className="form-control mb-3"/>
                            <ErrorMessage name="nationality" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Bộ Phận Làm Việc</label>
                            <Field type="text" name="position" className="form-control mb-3"/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Có Thẻ Bảo Hiểm Y Tế</label>
                            <Field type="checkbox" name="insuranceCard" className="form-group mb-3"/>
                        </div>
                        <div>
                            <h1><b>Địa Chỉ Liên Lạc Tại Việt Nam</b></h1>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Tỉnh /Thành</label>
                            <Field type="text" name="city" className="form-control mb-3"/>
                            <ErrorMessage name="city" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Quận/ Huyện</label>
                            <Field type="text" name="district" className="form-control mb-3"/>
                            <ErrorMessage name="district" component="span" style={{color: "red"}}/>

                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Phường/ Xã</label>
                            <Field type="text" name="ward" className="form-control mb-3"/>
                            <ErrorMessage name="ward" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Số Nhà</label>
                            <Field type="text" name="homeNumber" className="form-control mb-3"/>
                            <ErrorMessage name="homeNumber" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Điện Thoại</label>
                            <Field type="text" name="phone" className="form-control mb-3"/>
                            <ErrorMessage name="phone" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="col-sm-3 my-1">
                            <label className="form-group mb-3">Email</label>
                            <Field type="text" name="email" className="form-control mb-3"/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}/>
                        </div>
                        <div>
                            <h4><b>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/ vùng lãnh thổ nào(Có thể đi nhiều
                                quốc
                                gia)</b></h4>
                        </div>
                        <div className="col-sm-3 my-1">
                            <Field as="textarea" name="goWhere" className="form-control"></Field>
                        </div>
                        <div>
                            <h4><b>Trong 14 ngày qua Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?</b></h4>
                        </div>
                        <div className="col-sm-3 my-1">
                            <Field type="checkbox" name="sick" value="sốt" className="form-group mb-3"/>Sốt
                        </div>
                        <div className="col-sm-3 my-1">
                            <Field type="checkbox" name="sick" value="ho" className="form-group mb-3"/>Ho
                        </div>
                        <div className="col-sm-3 my-1">
                            <Field type="checkbox" name="sick" value="khó thở" className="form-group mb-3"/>Khó Thở
                        </div>

                        <div className="col-sm-3 my-1">
                            <Field type="checkbox" name="sick" value="viêm phổi" className="form-group mb-3"/>Viêm Phổi
                        </div>
                        <div className="col-sm-3 my-1">
                            <Field type="checkbox" name="sick" value="đau họng" className="form-group mb-3"/>Đau Họng
                        </div>
                        <div className="col-sm-3 my-1">
                            <Field type="checkbox" name="sick" value="mệt mỏi" className="form-group mb-3"/>Mệt Mỏi
                        </div>
                        <div>
                            <h4><b>Trong vòng 14 ngày Anh/ Chị có tiếp xúc với ?</b></h4>
                        </div>
                        <div className="col-sm-3 my-1">
                            <Field type="checkbox" name="meet" value="1" className="form-group mb-3"/>Người bệnh hoặc
                            nghi
                            ngờ,
                            mắc bện COVID
                        </div>
                        <div className="col-sm-3 my-1">
                            <Field type="checkbox" name="meet" value="8" className="form-group mb-3"/>Người từ nước có
                            bệnh
                            COVID
                        </div>
                        <div className="col-sm-3 my-1">
                            <Field type="checkbox" name="meet" value="9" className="form-group mb-3"/>Người có biểu
                            hiện(Sốt,ho,
                            khó thở,viêm phổi)
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