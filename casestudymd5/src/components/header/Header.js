import React from "react";
import "./Header.css";
function Header() {
    return(
        <header>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid d-flex justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Giới thiệu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Loại phòng</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ẩm thực</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hội nghị và sự kiện</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Spa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Giải trí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Điểm đến</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ưu đãi</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;