import React from 'react'

const Day = props => {
  console.log('IN DAY', props)
  return(
    <div className="ui card">
      <div className="image">
        <img src={`/icons/${props.details.icon}`} alt="test"/>
      </div>
      <div className="content">
        {props.details.dateTimeISO.slice(0,10)}
      </div>
      <div className="meta">
        <p>
          High: {props.details.maxTempF}
        </p>
        <p>
          Low: {props.details.minTempF}
        </p>
      </div>
      <br/>
    </div>
  )
}


export default Day
