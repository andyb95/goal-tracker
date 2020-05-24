import React, {Component} from 'react';
import Header from './Components/Header'
import GoalChart from './Components/GoalChart'
import MasterChart from './Components/MasterChart'
import UserGoals from './Components/UserGoals'
import UserInput from './Components/UserInput'
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state={
      goals: []
    }
    this.addNewGoal = this.addNewGoal.bind(this)
    this.updateGoal = this.updateGoal.bind(this)
    this.deleteGoal = this.deleteGoal.bind(this)
  }

  addNewGoal() {
    const postData = { name: 'andy', timeline: 'now' }
    
    axios.post('/api/goals', postData).then(res => {
      this.setState({goals: [...this.state.goals, res.body]})
    })
  }

  updateGoal(){

  }

  deleteGoal(){

  }

  render(){
    return (
      <div className="App">
        <Header />
        <MasterChart />
        <GoalChart />
      </div>
    );
  }
}

export default App;
