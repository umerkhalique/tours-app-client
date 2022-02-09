import React from 'react'
import CardStyles from './UI/CardStyles'
import img11 from "../images/img11.jpg";

const Card = ({heading, price, content}) => {
  return (
    <CardStyles>
        <img alt="card-image" src={img11} className="card-img" />
        <div className="card-content">
            <div className="card-header">
                <h4>{heading}</h4>
                <h4 class="tour-price">${price}</h4>
            </div>
            <p>
                {content}
            </p>
        </div>
        <button className="delete">Not Interested</button>
    </CardStyles>
  )
}

export default Card

Card.defaultProps = {
    heading: 'Best of Paris in 7 Days Tour',
    price: 1.995,
    content: 'lorem ipsum dolor sit amet, consectetur adip'
}