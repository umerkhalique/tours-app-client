import React from "react";
import Card from './Card';
import {tours} from '../global/tours-api'

const Container = () => {
    return (
        <div className="container">
            {tours.map((tour, i) => {
                console.log(tour)
                return (
                    <Card key={i} {...tour} />
                    // WITHOUT SPREAD
                    // <Card key={i}  name={tour.name} image={tour.image} info={tour.info} price={tour.price} />
                )
            })}
        </div>
    );
};

export default Container