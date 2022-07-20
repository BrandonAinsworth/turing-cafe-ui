import React from "react";
import Reservation from "./Reservation";



const Reservations = ({ reservations  }) => {
    
    let resMap = reservations.map(res => {
        return (
            <Reservation
        id={res.id}
        key={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
    />
)})

return (
    <div>{resMap}</div>
)
}

export default Reservations