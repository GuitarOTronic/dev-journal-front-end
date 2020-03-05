import React from 'react'
import moment from "moment"
import './weekView.css'

export default function WeekView(props) {
  const { weekData } = props
  function getRating(rating) {
    let starRating = ''
    let counter = 0
    while (counter < parseInt(rating, 10)) {
      counter++
      starRating += " *"
    }
    return starRating
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {weekData.map(day => {
        const rating = getRating(day.rating)
        return <div key={day.id} className="day-container">
          <div className="rating-date-container">
            <div>{rating}</div>
            <div><strong>{moment(day.date).format("DD")}</strong></div>
          </div>
          <div className="features-container">
            <div id={`feats:${day.id}`}>{day.title}</div>
          </div>
          <div className="notes-container">
            {day.note}
          </div>
        </div>
      })}
    </div>
  )
}
