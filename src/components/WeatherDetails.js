import React from 'react'

function WeatherDetails() {
  return (
    <div>
        <article className='widget'>
            <div className='weatherIcon'>
                <i className="wi wi-day-sunny"></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>23.99&deg;</span>
                </div>
            </div>
        </article>
    </div>
  )
}

export default WeatherDetails