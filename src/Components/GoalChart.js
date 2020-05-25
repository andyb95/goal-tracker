import React, {Component} from 'react'
import axios from 'axios'

export default class GoalChart extends Component{

  constructor(){
    super()
    this.state = {
      didAccomplish: []
    }
  }

  handleDidAccomplish(){
    
    const {data} = this.props
    this.props.accomplished(data.id, 1)
  }

  handleDidNotAccomplish(){
    
    const {data} = this.props
    this.props.accomplished(data.id, 0)
  }

  render(){
    return (
      <div className= "Goal-Chart">
        <h1 class ="goal-det"> {this.props.data.name} </h1>
        <h1 class ="goal-det"> Timeline: {this.props.data.timeline} </h1>
        <h1 class ="goal-det"> Your Avg: {this.props.data.avg}% </h1>
        <div className = "goals-list">{this.props.goals}</div>
        <button onClick={() => this.props.accomplished(this.props.data.id, 1)}>Accomplished</button>
        <button onClick ={() => this.props.accomplished(this.props.data.id, 0)}>Not Today</button>

        <button onClick={() => this.props.deleteGoal(this.props.data.id)}>delete goal</button>
      </div>
    )
  }

}