import React from 'react'

const Day = props => {
  console.log('IN DAY', props.details)
  return(
    <div className="ui card">
      <div className="content">
        {props.details.dateTimeISO.slice(0,10)}
      </div>
      <div className="meta">
      <p>
        Max Temp: {props.details.maxTempF}
       </p>
       <p>
       Min Temp: {props.details.minTempF}
       </p>
      </div>
      <br/>
    </div>
  )
}


export default Day
