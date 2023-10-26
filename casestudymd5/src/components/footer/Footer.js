// import React from "react";
// import './Footer.css';
// function Footer() {
// return(
//     <div className="footer">
//         <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top ">
//             <div className="col mb-3">
//                 <a href="" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
//                 </a>
//                 <p className="text-muted">&copy; 2022</p>
//             </div>
//             <div className="col mb4">
//
//             </div>
//             <div className="col mb-4">
//                 <ul className="nav flex-column">
//                     <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Giá Công bố</a></li>
//                     <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lifestyle Blog</a>
//                     </li>
//                     <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tuyển dụng</a></li>
//                     <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Liên hệ</a></li>
//                 </ul>
//             </div>
//
//             <div className="col mb-4">
//                 <h4>Liên hệ</h4>
//                 <p><i className="fa-solid fa-location-dot" style={{color: '#046056', fontSize: '1.5rem'}}></i> 103 - 105 Vo
//                     Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City, Vietnam</p>
//                 <p><i className="fa-solid fa-phone" style={{color: '#046056', fontSize: '1.5rem'}}></i> Tel.: 84-236-3847
//                     333/888 * Fax: 84-236-3847 666</p>
//                 <p><i className="fa-regular fa-envelope" style={{color: '#046056', fontSize: '1.5rem'}}></i> Email:
//                     reservation@furamavietnam.com * www.furamavietnam.com GDS Codes: Amadeus-GD DADFUR,
//                     Galileo/Apollo-GD 16236, Sabre-GD 032771, Worldspan- GD DADFU</p>
//             </div>
//         </footer>
//     </div>
// )
// }
// export default Footer;

import React from "react";

const Footer = () => {
    return (
        <>
            {/* Footer End */}
            <div
                className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Our Office</h4>
                            <p className="mb-2">13 Trường Sa, Ngũ Hành Sơn, Đà Nẵng</p>
                            <p className="mb-2">+012 345 67890</p>
                            <p className="mb-2">info@example.com</p>
                            <div className="d-flex pt-2">
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-2"

                                >
                                    <i className="fa-brands fa-twitter" />
                                </a>
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-2"

                                >
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-2"

                                >
                                    <i className="fab fa-youtube" />
                                </a>
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-2"

                                >
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Information</h4>
                            <a className="btn btn-link" >
                                About Us
                            </a>
                            <a className="btn btn-link" >
                                Contact Us
                            </a>
                            <a className="btn btn-link" >
                                Our Services
                            </a>
                            <a className="btn btn-link" >
                                Terms Condition
                            </a>
                            <a className="btn btn-link">
                                Support
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Business Hours</h4>
                            <a className="btn btn-link">
                                Monday - Friday
                            </a>
                            <a className="btn btn-link" >
                                09:00 am - 07:00 pm
                            </a>
                            <a className="btn btn-link" >
                                Saturday
                            </a>
                            <a className="btn btn-link" >
                                09:00 am - 12:00 pm
                            </a>
                            <a className="btn btn-link">
                                Support
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Newsletter</h4>
                            <p>Please leave your contact information.</p>
                            <div className="position-relative w-100">
                                <input
                                    className="form-control bg-light border-light w-100 py-3 ps-4 pe-5"
                                    type="text"
                                    placeholder="Your email"
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                                >
                                    SignUp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>
    );
};
export default Footer;