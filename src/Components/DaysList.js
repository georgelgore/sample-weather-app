import React from 'react'
import Day from './Day'

const DayList = props => {
  return(
    <div className="ui cards">
    {props.days.map( (day, i) => <Day key={i} details={day} fahrenheit={props.fahrenheit}/>)}
    </div>
  )
}


export default DayList
