import React from 'react'
import Day from './Day'

const DayLister = props => {
  return(
    <div className="ui seven cards">
      {props.days.map( (day, i) => <Day key={i} details={day} fahrenheit={props.fahrenheit}/>)}
    </div>
  );
}

export default DayLister
