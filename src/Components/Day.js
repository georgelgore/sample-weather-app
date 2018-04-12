import React from 'react'

const Day = props => {
  console.log('IN DAY', props)
  return(
    <div className="ui card">
      <div className="content">
        <h1>{props.details.dateTimeISO.slice(0,10)}</h1>
      </div>
      <div className="image">
      <img src={`/icons/${props.details.icon}`} alt="test"/>
      </div>
      <div className="meta">
        <div>
          <h2> High:{!!props.fahrenheit ? `${props.details.maxTempF}°F` : `${props.details.maxTempC}°C`}</h2>
        </div>
        <div>
          <h2> Low:{!!props.fahrenheit ? `${props.details.minTempF}°F` : `${props.details.minTempC}°C`}</h2>
        </div>
      </div>
      <br/>
    </div>
  )
}


export default Day
