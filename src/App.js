import React, {Component} from 'react';
import Header from './Components/Header'
import GoalChart from './Components/GoalChart'
import MasterChart from './Components/MasterChart'
import UserGoals from './Components/UserGoals'
import NewGoal from './Components/NewGoal'
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state={
      goals: []
    }
    this.getNewGoals = this.getNewGoals.bind(this)
    this.accomplished = this.accomplished.bind(this)
    this.deleteGoal = this.deleteGoal.bind(this)
  }

  componentDidMount() {
    document.title = 'Goal Mate'
  }

  getNewGoals(name, timeline){
    const body = {name, timeline}
    axios.post('/api/goals', body).then((res)=> {
      this.setState({goals: res.data})
      
    })
    
  }

  accomplished(id, num){
    const body = {num}
    console.log("!", id, num)

    axios.put(`/api/edit/${id}`, body).then((res) => {
      this.setState({goals: res.data})
      
    })
    .catch(err => console.log(err))
  }

  deleteGoal(id){
    axios.delete(`/api/goals/${id}`).then((res) => {
      this.setState({goals: res.data})
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div class = "User-Goals">
          <UserGoals 
            goals={this.state.goals}
            accomplished={this.accomplished}
            deleteGoal={this.deleteGoal}
          />
        </div>
        <div class = "new-goal">
          <NewGoal 
            getNewGoals={this.getNewGoals} />
        </div>
      </div>
    );
  }
}

export default App;
