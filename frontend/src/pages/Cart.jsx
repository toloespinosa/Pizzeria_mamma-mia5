import React, { useState, useEffect } from 'react';
import { fetchPizzas } from '../components/pizzas';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadPizzas = async () => {
      const pizzas = await fetchPizzas();
      setCart(pizzas.map(pizza => ({ ...pizza, quantity: 3 })));
    };
    loadPizzas();
  }, []);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id && pizza.quantity > 0
            ? { ...pizza, quantity: pizza.quantity - 1 }
            : pizza
        )
        .filter((pizza) => pizza.quantity > 0)
    );
  };

  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} />
            <h5>{pizza.name}</h5>
            <p>Precio: ${pizza.price}</p>
            <p>Cantidad: {pizza.quantity}</p>
            <button onClick={() => increaseQuantity(pizza.id)}>+</button>
            <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
          </li>
        ))}
      </ul>
      <h3 id='total'>Total: ${total.toLocaleString('en-EU', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;
