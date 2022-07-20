import React from "react";


const Reservation = ({id, name, time, date, number}) => {
    return (
    <div data-cy="reservation">
        <p data-cy="res-name">{name}</p>
        <p data-cy="res-date">{date}</p>
        <p data-cy="res-time">{time}</p>
        <p data-cy="res-number">Number of guests: {number}</p>
    </div>
    )
}


export default Reservation 