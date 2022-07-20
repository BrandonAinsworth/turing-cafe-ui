import React from "react";


const Reservation = ({id, name, time, date, number}) => {
    return (
    <div>
        <p>{name}</p>
        <p>{date}</p>
        <p>{time}</p>
        <p>Number of guests: {number}</p>
    </div>
    )
}


export default Reservation 