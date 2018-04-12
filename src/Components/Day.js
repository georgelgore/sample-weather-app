import React from 'react'

const Day = props => {
  return(
    <div className="ui card">
      <div className="content">
        <h3 className="header">{props.details.dateTimeISO.slice(0,10)}</h3>
      </div>
      <div className="image">
      <img src={`/icons/${props.details.icon}`} alt="test"/>
      </div>
      <br/>
      <div className="description">
        <div>
          <h4> High: {!!props.fahrenheit ? `${props.details.maxTempF}°F` : `${props.details.maxTempC}°C`}</h4>
        </div>
        <div>
          <h4> Low: {!!props.fahrenheit ? `${props.details.minTempF}°F` : `${props.details.minTempC}°C`}</h4>
        </div>
      </div>
      <br/>
    </div>
  );
}


export default Day
