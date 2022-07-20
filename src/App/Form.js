import React, { Component } from "react";


class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '' ,
            date: '' ,
            time: '' ,
            number: ''
        }
}

onChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
}

submitReservation = (event) => {
    event.preventDefault()
    const newReservation = {
        id: this.props.length + 1 ,
        ...this.state
    }
    this.props.addReservation(newReservation)
}

render() {
    return (
        <form data-cy="res-form">
            <input 
            type='text'
            name="name"
            placeholder="Name"
            value={this.state.name}
            data-cy="input-name"
            onChange={event => this.onChange(event)}
            />
             <input 
            type='text'
            name="date"
            placeholder="Date (mm/dd)"
            value={this.state.date}
            data-cy="input-date"
            onChange={event => this.onChange(event)}
            />
             <input 
            type='text'
            name="time"
            placeholder="Time"
            value={this.state.time}
            data-cy="input-time"
            onChange={event => this.onChange(event)}
            />
             <input 
            type='text'
            name="number"
            placeholder="Number of guests"
            value={this.state.number}
            data-cy="input-number"
            onChange={event => this.onChange(event)}
            />
           <button data-cy="submit-button" onClick={event => this.submitReservation(event)}>Make Reservation</button>
        </form>
    )
}
}

export default Form