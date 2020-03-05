import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import WeekView from './weekView/WeekView';
import Reminders from './reminders/Reminders'
import Reads from './reads/Reads'

class App extends Component {
  constructor(props) {
    super(props)
    this.config = {
      headers: { 'Access-Control-Allow-Origin': '*' }
    }
    this.state = {
      weekData: [],
      errorMessage: ""
    }
  }

  componentDidMount = async () => {
    try {
      const res = await axios.get('http://localhost:8888/week/currentWeek', this.config)
      this.setState({ weekData: res.data.weekNotes })
    } catch (err) {
      const errorMessage = err.message || "Wow weee"
      this.setState({ errorMessage })
    }
  }

  handleWeekClick = async (e) => {
    let startDate = this.state.weekData[0].date
    let endDate = this.state.weekData[4].date
    const id = e.target.id
    const weekDirection = id === 'last-week' ? 'lastWeek' : 'nextWeek'
    try {
      const res = await axios.post(`http://localhost:8888/week/${weekDirection}`, { startDate, endDate })
      if(res.data.weekNotes.length !== 5){
        throw("No notes beyond here")
      }
      this.setState({ weekData: res.data.weekNotes })
    } catch (err) {
      const errorMessage = err.message || err || "Wow weee"
      console.error(errorMessage)
    }
  }


  render() {
    return (
      <div className="app-container">
        <h1>Dev Journal</h1>
        <WeekView weekData={this.state.weekData} />
        <button id="last-week" onClick={this.handleWeekClick}>Last Week</button>
        <button id="next-week" onClick={this.handleWeekClick}>Next Week</button>
        {/* Day of
          Feature worked
          Notes
        */}
        {/* <Reminders/> */}
        {/* <Reads/> */}
      </div>
    );

  }
}

export default App;
