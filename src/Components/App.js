import React, { Component } from 'react';
import DaysList from './DaysList'

class App extends Component {

  state = {
    days: [],
    fahrenheit: true
  }

  componentDidMount(){
    const url =  'http://api.aerisapi.com//forecasts/11206?client_id=VKCz64RbrKSta2PdYkNWV&client_secret=vaeRdqWOLDygG987JV7pSQttjX9MNdVodli0lptj'
    fetch(url).then(resp => resp.json()).then(json => this.setState({days : json.response[0].periods}))
  }

  celsiusClick = (event) => this.setState({fahrenheit:false})

  fahrenheitClick = (event) => this.setState({fahrenheit:true})

  render() {
    console.log(this.state)
    return (
      <div className="ui center aligned container" style={{paddingTop: 100}}>
        <div className="ui segment">
          <h1> Welcome to the Weather App! </h1>
          <div className="ui large buttons">
          <button className="ui button" onClick={e => this.fahrenheitClick(e)}>Fahrenheit</button>
            <div className="or"></div>
            <button className="ui button" onClick={e => this.celsiusClick(e)}>Celsius</button>
          </div>
          <br/>
          <br/>
          <DaysList days={this.state.days} fahrenheit={this.state.fahrenheit}/>
        </div>
      </div>
    );
  }
}

export default App;
