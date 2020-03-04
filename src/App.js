import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import WeekView from './weekView/WeekView';
import Reminders from './reminders/Reminders'
import Reads from './reads/Reads'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weekData: []
    }
  }

  componentDidMount = async () => {
    const config = {
      headers: { 'Access-Control-Allow-Origin': '*' }
    }
    const res = await axios.get('http://localhost:8888/week/currentWeek', config)
    console.log('res', res)
    this.setState({ weekData: res.data })
  }


  render() {
    return (
      <div className="app-container">
        <h1>Dev Journal</h1>
        <WeekView weekData={this.state.weekData} />
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
