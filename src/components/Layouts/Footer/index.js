import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Row, Col, Container } from 'react-bootstrap';
import { MdLocationPin, MdArrowRight } from 'react-icons/md';
import { FaFacebookSquare, FaPhoneAlt, FaBitcoin, FaSmileBeam, FaTruck, FaTwitterSquare, FaGooglePlusSquare, FaYoutubeSquare } from 'react-icons/fa';




const cx = classNames.bind(styles)


export default function Footer() {
  return (
    <footer className={cx('footer')}> 
      <Container fluid="xl">

        <Row style={{marginBottom: "40px"}}>
          <Col >
            <div className={cx('first')}>
              <FaTruck className={cx('first-icon')} ></FaTruck>

              <div className={cx('first-content')}>

              <h4 className={cx('first-title')}>Ship hàng toàn quốc</h4>
              <p className={cx('first-decs')}>Nhanh và thuận tiện</p>
              </div>
            </div>
          </Col>

          <Col >
            <div className={cx('first')}>
              <FaBitcoin className={cx('first-icon')} ></FaBitcoin>

              <div className={cx('first-content')}>

              <h4 className={cx('first-title')}>Cam kết chính hãng</h4>
              <p className={cx('first-decs')}>Đảm bảo chất lượng 100%</p>
              </div>
            </div>
          </Col>

          <Col >
            <div className={cx('first')}>
              <FaSmileBeam className={cx('first-icon')} ></FaSmileBeam>

              <div className={cx('first-content')}>

              <h4 className={cx('first-title')}>Hỗ trợ tư vấn</h4>
              <p className={cx('first-decs')}>Thứ 2-Chủ Nhật : 08g00 - 23h</p>
              </div>
            </div>
          </Col>

          <Col >
            <div className={cx('first')}>
              <FaPhoneAlt className={cx('first-icon')} ></FaPhoneAlt>

              <div className={cx('first-content')}>

              <h4 className={cx('first-title')}>Đặt hàng trực tuyến</h4>
              <p className={cx('first-decs')}>Gọi ngay : 012.345.6789</p>
              </div>
            </div>
          </Col>
        </Row>


        <Row>
          <Col className={cx('container-left')} xs={3}>
            <div className={cx('left-col')}>
              <a href='#' className={cx('logo-link')}>
                <img className={cx('image')} src='http://betapharmavn.com.vn/wp-content/uploads/2018/12/logo.jpg'></img>
              </a>
            </div>
            <div className={cx('social')}>
              <a href='#' className={cx('social-link')} ><FaFacebookSquare /></a>
              <a href='#' className={cx('social-link')} ><FaTwitterSquare /></a>
              <a href='#' className={cx('social-link')} ><FaGooglePlusSquare /></a>
              <a href='#' className={cx('social-link')} ><FaYoutubeSquare /></a>
            </div>
          </Col>
          <Col xs={9}>
            <Row className={cx('container-right')}>
              <Col className={cx('right-col')}>
                <div className={cx('right-item')}>
                  <h5 className={cx('item-title')}>HỆ THỐNG NHÀ THUỐC</h5>
                  <ul className={cx('item-list')}>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdLocationPin /> Số 0 Nguyễn Ái Quốc, Việt Nam </a> </li>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdLocationPin /> Số 0 Nguyễn Ái Quốc, Việt Nam </a> </li>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdLocationPin /> Số 0 Nguyễn Ái Quốc, Việt Nam </a> </li>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdLocationPin /> Số 0 Nguyễn Ái Quốc, Việt Nam </a> </li>
                  </ul>
                </div>

              </Col>

              <Col className={cx('right-col')}>
                <div className={cx('right-item')}>
                  <h5 className={cx('item-title')}>CHÍNH SÁCH</h5>
                  <ul className={cx('item-list')}>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdArrowRight /> Chính sách thanh toán</a></li>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdArrowRight /> Chính sách vận chuyển</a></li>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdArrowRight /> Chính sách đổi trả</a></li>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdArrowRight /> Chính sách bảo hành</a></li>
                  </ul>
                </div>
              </Col>
              <Col className={cx('right-col')}>
                <div className={cx('right-item')}>
                  <h5 className={cx('item-title')}>HƯỚNG DẪN</h5>
                  <ul className={cx('item-list')}>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdArrowRight /> Hướng dẫn mua hàng</a> </li>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdArrowRight /> Giao nhận và thanh toán</a> </li>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdArrowRight /> Đổi trả và bảo hành</a> </li>
                    <li className={cx('item-chil')}><a href='#itemlink' className={cx('item-link')}> <MdArrowRight /> Đăng kí thành viên</a> </li>
                  </ul>
                </div>
              </Col>

            </Row>
          </Col>
        </Row>

      </Container>
    </footer>
  )
}
