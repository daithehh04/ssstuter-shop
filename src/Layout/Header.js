import React, { useEffect } from "react";

import "@splidejs/react-splide/css";
import logo from "../assets/Image/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const nav_links = [
    {
        path: "/",
        display: "TRANG CHỦ",
    },
    {
        path: "FOR-HIM",
        display: "NAM",
    },
    {
        path: "FOR-HER",
        display: "NỮ",
    },
];
const Header = () => {
    const headerRef = React.useRef(null);
    const menuRef = React.useRef(null);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    const menuToggle = () => menuRef.current.classList.toggle("active");

    const handlerSearch = () => {
        toast.info("Chức năng đang trong quá trình cập nhật!");
    };
    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="wrapper">
                    {/* Navigate */}
                    <div className="header-menu" onClick={menuToggle}>
                        <i class="ri-menu-fill"></i>
                    </div>
                    <div className="navigate">
                        <div className="navigate-list" ref={menuRef}>
                            <span className="icon-close" onClick={menuToggle}>
                                <i class="ri-arrow-left-s-line"></i>
                            </span>
                            <ul>
                                {nav_links.map((item, index) => (
                                    <li key={index} onClick={menuToggle}>
                                        <NavLink
                                            to={item.path}
                                            className={(navClass) =>
                                                navClass.isActive
                                                    ? "nav-active"
                                                    : ""
                                            }
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Logo */}
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="ssstutter" />
                        </Link>
                        <Link to="/">
                            <div className="logo-txt">SSSTUTER</div>
                        </Link>
                    </div>
                    {/* Nav Icons */}
                    <div className="nav-icons">
                        <span className="search-icon" onClick={handlerSearch}>
                            <i class="ri-search-line"></i>
                        </span>
                        <Link to="/cart">
                            <span className="cart-icon">
                                <i class="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
