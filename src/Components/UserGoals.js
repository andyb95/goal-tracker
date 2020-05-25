import React, {Component} from 'react'
import GoalChart from './GoalChart'

function UserGoals(props){
  const goalMap = props.goals.map(e => (
    <GoalChart
      key={e.id}
      accomplished={props.accomplished}
      deleteGoal={props.deleteGoal}
      data ={e}
    />
  ))

  return (
    <div>
      <h2>Goals</h2>
      <div>{goalMap}</div>
    </div>
  )
}

export default UserGoals