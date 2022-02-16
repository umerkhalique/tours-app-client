import React from 'react'
import CardStyles from './UI/CardStyles'
import img11 from "../images/img11.jpg";

const Card = ({name, price, info, image}) => {
  return (
    <CardStyles>
        <img alt="card-image" src={image} className="card-img" />
        <div className="card-content">
            <div className="card-header">
                <h4>{name}</h4>
                <h4 class="tour-price">${price}</h4>
            </div>
            <p>
                {info}
            </p>
        </div>
        <button className="delete">Not Interested</button>
    </CardStyles>
  )
}

export default Card

Card.defaultProps = {
    name: 'Best of Paris in 7 Days Tour',
    price: 1.995,
    info: 'lorem ipsum dolor sit amet, consectetur adip',
    image: img11
}