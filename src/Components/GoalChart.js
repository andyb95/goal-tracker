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
    this.setState({didAccomplish: [...this.state.didAccomplish, 1]})
    const {data} = this.props
    this.props.accomplished(data.id, this.state.didAccomplish)
  }

  handleDidNotAccomplish(){
    this.setState({didAccomplish: [...this.state.didAccomplish, 0]})
    const {data} = this.props
    this.props.accomplished(data.id, this.state.didAccomplish)
  }


  render(){
    return (
      <div className= "App">
        <h1> `Goal 1: ${this.props.goals[0]}` </h1>
        <div className = "goals-list">{this.props.goals}</div>
        <button onClick={() => this.handleDidAccomplish()}>Accomplished</button>
        <button onClick ={() => this.handleDidNotAccomplish()}>Not Today</button>
      </div>
    )
  }

}