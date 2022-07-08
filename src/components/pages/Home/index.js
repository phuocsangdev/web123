import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import Conveyor from "../../Conveyor";
import ProductGroup from "../../ProductGroup/ProductGroup";

export default function Home() {
  const [orderNums, setOrderNums] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Header orderNums={orderNums} setOrderNums={setOrderNums} />
      <Container style={{ margin: "15px auto" }}>
        <Row>
          <Conveyor />
        </Row>
        <Row>
          <div style={{ margin: "15px auto" }}>
            <img
              style={{ width: "100%" }}
              src="https://bizweb.dktcdn.net/100/239/632/themes/569586/assets/policy.png?1635568039150"
            ></img>
          </div>
        </Row>
        <Row>
          <ProductGroup
            orderNums={orderNums}
            setOrderNums={setOrderNums}
            products={products}
            title="Sản phẩm mới"
            imageSrc="https://bizweb.dktcdn.net/100/239/632/themes/569586/assets/index_col_left_banner_1.jpg?1635568039150"
          />
          <ProductGroup
            orderNums={orderNums}
            setOrderNums={setOrderNums}
            products={products}
            title="Sản phẩm khuyến mãi"
            imageSrc="https://bizweb.dktcdn.net/100/239/632/themes/569586/assets/index_col_left_banner_2.jpg?1635568039150"
          />
          <ProductGroup
            orderNums={orderNums}
            setOrderNums={setOrderNums}
            products={products}
            title=" Sản phẩm nổi bật"
            imageSrc="https://bizweb.dktcdn.net/100/239/632/themes/569586/assets/index_col_left_banner_3.jpg?1635568039150"
          />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
