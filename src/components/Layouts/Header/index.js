import classNames from "classnames/bind";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsCartCheck, BsTelephone } from "react-icons/bs";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header({ orderNums }) {
  return (
    <header>
      <div className={cx("header-first")}>
        <Container fluid="xl" className={cx("container")}>
          <div className={cx("container-left")}>
            <a className={cx("left-link")} href="tel:0123456789">
              <BsTelephone className={cx("left-link-icon")} />
              0123456789
            </a>
            <a className={cx("left-link")} href="mailto: info@gmail.com">
              <AiOutlineMail className={cx("left-link-icon")} />
              info@gmail.com
            </a>
          </div>
          <div className={cx("container-right")}>
            <ul className={cx("right-list")}>
              <Link className={cx("right-list-link")} to="/introduce">
                {" "}
                Giới thiệu{" "}
              </Link>
              <Link className={cx("right-list-link")} to="#1">
                {" "}
                Tin tức{" "}
              </Link>
              <Link className={cx("right-list-link")} to="#1">
                {" "}
                Tuyển dụng{" "}
              </Link>
              <Link className={cx("right-list-link")} to="#1">
                {" "}
                Liên hệ{" "}
              </Link>
            </ul>
          </div>
        </Container>
      </div>

      <Container fluid="xl" className={cx("header-second")}>
        <Link to="/" className={cx("logo")}>
          <img
            className={cx("logo-img")}
            src="http://betapharmavn.com.vn/wp-content/uploads/2018/12/logo.jpg"
          ></img>
        </Link>
        <Form className={cx("search")}>
          <Form.Control
            type="search"
            placeholder="Nhập từ khóa..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Tìm</Button>
        </Form>

        <div className={cx("link-list")}>
          <Link to="/account" className={cx("icon-link")}>
            <AiOutlineUser className={cx("icon")} />
            <p>TÀI KHOẢN</p>
          </Link>

          <a href="#" className={cx("icon-link")}>
            <BsCartCheck className={cx("icon")} />
            <p>GIỎ HÀNG</p>
            <span className={cx("icon-nums")}>
              {orderNums ? orderNums : ""}
            </span>
          </a>
        </div>
      </Container>

      <div className={cx("header-third")}>
        <Container>
          <Navbar className={cx("navbar")} expand="lg">
            <Container className={cx("wide", "navbar-container")} fluid>
              <Navbar.Brand className={cx("nav-home")}>
                <Link to="/" className={cx("nav-home-link")}>
                  Trang chủ
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "300px" }}
                  navbarScroll
                >
                  <NavDropdown
                    className={cx("nav-down")}
                    title="Dược phẩm"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">
                      Thuốc không kê đơn
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Thuốc kê đơn
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    className={cx("nav-down")}
                    title="Chăm sóc sức khỏe"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">
                      Thực phẩm dinh dưỡng
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Dụng cụ sơ cứu
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Kế hoạch gia đình
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Khẩu trang y tế
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className={cx("nav-down")}
                    title="Mẹ và Bé"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">
                      Chăm sóc em bé
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Sản phẩm dành cho mẹ
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    className={cx("nav-down")}
                    title="Sản phẩm tiện lợi"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">
                      Hàng tổng hợp
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Hàng bách hóa
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    className={cx("nav-down")}
                    title="Thực phẩm chức năng"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">
                      TPCN Nhóm dạ dày
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      TPCN Nhóm tim mạch
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      TPCN Nhóm xương khớp
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      TPCN Chăm sóc sắc đẹp
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </header>
  );
}

export default Header;
