import React, { useState } from 'react';

const CardPizza = ({ pizza }) => {
  const { name, ingredients, price, img: image, desc: description } = pizza;
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const truncatedDescription = description.length > 100 ? `${description.substring(0, 100)}...` : description;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>Precio: ${price}</p>
        <p className="description">
          {showMore ? description : truncatedDescription}
          {description.length > 100 && (
            <button onClick={toggleShowMore} className="show-more-btn">
              {showMore ? ' Ver menos' : ' Ver más'}
            </button>
          )}
        </p>
        <button className="add-to-cart-btn">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default CardPizza;
