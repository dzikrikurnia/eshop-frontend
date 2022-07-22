import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';

function CartItem() {
    return(
        <Card className='p-3 mt-3'>
            <Row>
                <Col className='col-1'>
                    <Card.Img src='null' />
                </Col>
                <Col className='col-10'>
                    <Card.Title>Title Barang</Card.Title>
                    <Card.Subtitle>Rp. 0000</Card.Subtitle>
                    <Card.Text>qty : 1</Card.Text>
                </Col>
                <Col className='col-1 d-flex justify-content-center align-items-center'>
                    <Button>
                        <MdDelete />
                    </Button>
                </Col>
            </Row>
        </Card>
    );
}

export default CartItem;