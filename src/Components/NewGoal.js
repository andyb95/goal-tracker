import React, {Component} from 'react'
import axios from 'axios'

export default class NewGoal extends Component{

  constructor(){
    super()
    this.state={
      name: '',
      timeline: '',
      newGoals: []
    }
    
  }

   

  handleChangeName(val){
    this.setState({name: val})
  }
 

  handleChangeTimeline(val){
    this.setState({timeline: val})
  }

  AddNewGoal(){
    // const {data} = this.props
    this.props.getNewGoals(this.state.name, this.state.timeline)
    // this.props.refreshFn()
  }


  render(){
    return(
      <div class="New-Goal">
        <h1>NewGoal</h1>

        <input placeholder= "describe goal here" onChange= {e => this.handleChangeName(e.target.value)}/>

        <input placeholder= "how long will this goal take?" onChange= {e => this.handleChangeTimeline(e.target.value)}/>

        <button onClick = {() => this.AddNewGoal()}>Add New Goal</button>
      </div>
    )
  }
}