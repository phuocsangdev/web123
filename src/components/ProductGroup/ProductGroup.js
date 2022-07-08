import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import CardItem from "../CardItem";
import styles from "./ProductGroup.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function ProductGroup3({
  orderNums,
  setOrderNums,
  products,
  title,
  imageSrc,
}) {
  // handle rendering only 8 products every group
  const [index, setIndex] = useState(8);
  const productsRender = products.slice(0, index);
  const handleClick = () => {
    setIndex((prevIndex) => prevIndex + 8);
  };
  return (
    <div className={cx("product")}>
      <Row>
        <Col>
          <div className={cx("block-title")}>
            <div className={cx("collection-name")}>
              <img
                className={cx("collection-icon")}
                src="https://bizweb.dktcdn.net/100/239/632/themes/569586/assets/index_col_icon_1.png?1635568039150"
              ></img>
              <a className={cx("collection-link")} href="#t">
                {" "}
                {title}{" "}
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <img className={cx("product-img")} src={imageSrc}></img>
        </Col>
      </Row>

      <Row>
        {productsRender.map((product, index) => (
          <Col className={cx("cover-item")} xs={3} key={index}>
            <CardItem
              orderNums={orderNums}
              setOrderNums={setOrderNums}
              productTitle={product.title}
              productImgUrl={product.imgUrl}
              productPrice={product.price}
              productDescription={product.description}
            />
          </Col>
        ))}
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <div className={cx("more")}>
          <Button onClick={handleClick} variant="success">
            Xem thêm
          </Button>{" "}
        </div>
      </Row>
    </div>
  );
}
