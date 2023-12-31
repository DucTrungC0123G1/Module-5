import React from "react";
function Facility() {
    return (
        <div>
            <div className="min-vh-100 ">
                <h1 style={{textAlign: 'center', marginTop: '1rem'}}>List Rooms</h1>
                <div className="d-flex flex-wrap justify-content-start m-5">
                    <div className="card flex-grow-1" style={{width: '18rem'}}>
                        <img src="https://decofuni.vn/Upload/images/tin-tuc/noi-that-phong-ngu-resort.jpg"
                             className="card-img-top" alt="..." style={{height: '16rem'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Rooms</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the
                                bulk
                                of
                                the card's content.</p>
                            <a href="#" className="btn btn-primary">Book</a>
                        </div>
                    </div>
                    <div className="card flex-grow-1" style={{width: '18rem'}}>
                        <img src="https://decofuni.vn/Upload/images/tin-tuc/cac-loai-phong-cua-resort.jpg"
                             className="card-img-top" alt="..." style={{height: '16rem'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Villa</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the
                                bulk
                                of
                                the card's content.</p>
                            <a href="#" className="btn btn-primary">Book</a>
                        </div>
                    </div>
                    <div className="card flex-grow-1" style={{width: '18rem'}}>
                        <img
                            src="https://nhatrang-tourist.com/image/cache/catalog/KH%C3%81CH%20S%E1%BA%A0N/Fusion%20Cam%20Ranh/Ocean%20Suite-750x414.jpg"
                            className="card-img-top" alt="..." style={{height: '16rem'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Bugalon</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the
                                bulk
                                of
                                the card's content.</p>
                            <a href="#" className="btn btn-primary">Book</a>
                        </div>
                    </div>
                    <div className="card flex-grow-1" style={{width: '18rem'}}>
                        <img
                            src="https://homepage.momocdn.net/blogscontents/momo-upload-api-200717145329-637305944092533569.jpg"
                            className="card-img-top" alt="..." style={{height: '16rem'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Vip</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the
                                bulk
                                of
                                the card's content.</p>
                            <a href="#" className="btn btn-primary">Book</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Facility;