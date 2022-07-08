import React from 'react'
import Footer from '../../Layouts/Footer'
import Header from '../../Layouts/Header'
import { Breadcrumb, Container } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';


const cx = classNames.bind(styles)


export default function Introduce() {
  return (
    <>
      <Header />
      <Container>
        <div style={{ margin: "16px 0", borderBottom: "1px solid #ccc" }}>
          <Breadcrumb>
            <Breadcrumb.Item href='/' > Trang chủ </Breadcrumb.Item>
            <Breadcrumb.Item active href='/account'> Tài khoản </Breadcrumb.Item>
          </Breadcrumb>
        </div>

      </Container>
      <Container>

        <div className={cx('wrapper')}>
          <h1> Đây là trang giới thiệu </h1>
        </div>
      </Container>
      <Footer />
    </>
  )
}
