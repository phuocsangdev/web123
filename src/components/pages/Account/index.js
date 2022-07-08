import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Layouts/Header'
import classNames from 'classnames/bind';
import Footer from '../../Layouts/Footer'
import { Breadcrumb, Form, Button } from 'react-bootstrap'
import styles from './Account.module.scss';



const cx = classNames.bind(styles)


export default function Account() {
  return (
    <>
      <Header />
      <Container>
        <div style={{margin:"16px 0", borderBottom:"1px solid #ccc"}}>
          <Breadcrumb>
            <Breadcrumb.Item href='/' > Trang chủ </Breadcrumb.Item>
            <Breadcrumb.Item active href='/account'> Tài khoản </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
      
      <Container>
        <div className={cx('wrapper')}>
          <Row>
            <Col>
              <h2> Đăng nhập </h2>
              <div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Nhập email" />
                    <Form.Text className="text-muted">
                      Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Nhập mật khẩu" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Lưu mật khẩu" />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Đăng nhập
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  )
}
