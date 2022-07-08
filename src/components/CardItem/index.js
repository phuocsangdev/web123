import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./CardItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CardItem({
  orderNums,
  setOrderNums,
  productTitle,
  productImgUrl,
  productPrice,
  productDescription,
}) {
  const handleClick = () => {
    setOrderNums((prev) => prev + 1);
  };
  return (
    <a className={cx("card-item")} href="#item ">
      <Card style={{ width: "240px" }}>
        <Card.Img variant="top" src={productImgUrl} />
        <Card.Body>
          <Card.Title>{productTitle}</Card.Title>
          <Card.Text>{productDescription}</Card.Text>

          <Card.Text>{productPrice}</Card.Text>
          <Button
            onClick={handleClick}
            style={{ zIndex: "10" }}
            variant="success"
          >
            Thêm vào giỏ hàng
          </Button>
        </Card.Body>
      </Card>
    </a>
  );
}

export default CardItem;
