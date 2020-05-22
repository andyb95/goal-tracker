import React, {Component} from 'react';
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

  componentDidMount(){

  }

  addNewGoal() {
    this.setState({goals: [...this.state.goals, this.props.newGoal]})
  }

  updateGoal(){

  }

  deleteGoal(){

  }

  render(){
    return (
      <div className="App">
        {/* <Header />
        <MasterChart />
        <GoalChart />
        <NewGoal /> */}
      </div>
    );
  }
}

export default App;
