import React from 'react'
import { Container } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import image from '../assets/batu.jpg';
import { Navigate } from 'react-router-dom';

const dummyProducts = [
  {
        id: 0,
        title: "A",
        price: 17000,
        description: "Sample description",
        image: image,
        quantity: 5,
    },
    {
        id: 1,
        title: "B",
        price: 17000,
        description: "Sample description",
        image: image,
        quantity: 5,
    },
    {
        id: 2,
        title: "C",
        price: 17000,
        description: "Sample description",
        image: image,
        quantity: 5,
    },
    {
        id:3,
        title: "Batu",
        price: 666,
        description: "Keras",
        image: image,
        quantity: 69,
    },
];

function Carts({isLogedIn}) {

  if (!isLogedIn) {
    return (
      <Navigate to='/auth/login' replace />
    );
  }

  return (
    <Container>
      {dummyProducts.map((product) => (
        <CartItem key={product.id} item={product} />
      ))}
    </Container>
  )
}

export default Carts;