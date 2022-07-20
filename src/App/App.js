import React, { Component } from 'react';
import Reservations from './Reservations';
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
