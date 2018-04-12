import React, { Component } from 'react';
import './App.css';
import DaysList from './DaysList'

class App extends Component {

  state = {
    days: []
  }

  componentDidMount(){
    const url =  'http://api.aerisapi.com//forecasts/11206?client_id=VKCz64RbrKSta2PdYkNWV&client_secret=vaeRdqWOLDygG987JV7pSQttjX9MNdVodli0lptj'
    fetch(url).then(resp => resp.json()).then(json => this.setState({days : json.response[0].periods}))
  }
  render() {
    console.log(this.state)
    return (
      <div  className="ui center aligned container">
        <h1> Welcome to the Weather App! </h1>
        <DaysList days={this.state.days}/>
      </div>
    );
  }
}

export default App;
