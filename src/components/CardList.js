import React from "react";
import { Row, Col } from 'react-bootstrap';
import CardItem from "./CardItem";
import a from '../assets/chest-plate.png';
import b from '../assets/throw-pillow.png';
import c from '../assets/steel-shoes.png';

const dummyProducts = [
    {
        id: 0,
        title: "A",
        price: 17000,
        description: "Sample description",
        image: a,
    },
    {
        id: 1,
        title: "B",
        price: 17000,
        description: "Sample description",
        image: b,
    },
    {
        id: 2,
        title: "C",
        price: 17000,
        description: "Sample description",
        image: c,
    },
];

function CardList() {
    return(
        <Row xs={1} xl={4} sm={2} lg={3} md={3}>
            {dummyProducts.map((product) => (
                <Col key={product.id}>
                    <CardItem item={product} />
                </Col>
            ))}
        </Row>
    )
}

export default CardList;