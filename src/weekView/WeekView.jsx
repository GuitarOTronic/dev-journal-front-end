import React from 'react'
import moment from "moment"
import './weekView.css'
export default function WeekView({ weekData }) {
  function getRating(rating){
    let starRating = ''
    let counter = 0
    while(counter < parseInt(rating, 10)){
      counter++
      starRating +=" *"
    }
    return starRating
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {weekData.map(data => {
        const rating = getRating(data.rating)
        return <div key={data.id} className="day-container">
          <div className="rating-date-container">
            <div>{rating}</div>
            <div><strong>{moment(data.date).format("DD")}</strong></div>
          </div>
          <div className="features-container">
            <label htmlFor={`feats:${data.id}`}>Features:</label>
            <div id={`feats:${data.id}`}>{data.features}</div>
          </div>
          <div className="notes-container">
            {data.notes}
            {JSON.stringify(data)}
            </div>
        </div>
      })}
    </div>
  )
}