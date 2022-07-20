import React, { Component } from 'react';
import Reservations from './Reservations';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }


componentDidMount = () => {

  fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(reserves => {
      this.setState({
        reservations: reserves
      })
    })
}

addReservation = (newReservation) => {
 newReservation.number = parseInt(newReservation.number)
  this.setState({
  reservations: [...this.state.reservations , newReservation]
  }
  )
}


  render() {
    return (
      <div className="App">
        <h1 data-cy="app-title" className='app-title'>Turing Cafe Reservations</h1>
        <div data-cy="app-form" className='resy-form'>
          <Form length={this.state.reservations.length} addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
