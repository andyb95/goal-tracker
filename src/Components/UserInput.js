// import React, {Component} from 'react'

// export default class UserInput extends Component(){

//   constructor(){
//     super()
//     this.state={
//       name: '',
//       timeLine: '',
//     }
    
//   }

//   handleChangeSpecifics(val){
//     this.setState({specifics: val})
//   }
//   handleChangeMeasurable(val){
//     this.setState({measurable: val})
//   }
//   handleChangeAttainable(val){
//     this.setState({attainable: val})
//   }
//   handleChangeRelevant(val){
//     this.setState({relevant: val})
//   }
//   handleChangeTimely(val){
//     this.setState({timely: val})
//   }

//   handleAddNewGoal(){
//     const {data} = this.props
//     this.props.addNewGoal
//   }

//   // addInput(){
//   //   const newGoal = {
//   //     this.state.specifics,

//   // }

//   render(){
//     return(
//       <div>
//         <input placeholder= "describe goal here" onChange= {e => this.handleChangeSpecifics(e.target.value)}/>

//         <input placeholder= "how will you measure this goal?" onChange ={e => this.handleChangeMeasurable(e.target.value)}/>

//         <input placeholder= "how will you know you have attained this goal?" onChange = {e => this.handleChangeAttainable(e.target.value)}/>

//         <input placeholder= "how does this help you?" onChange = {e => this.handleChangeRelevant(e.target.value)}/>

//         <input placeholder= "how long will this goal take to achieve?" onChange= {e => this.handleChangeTimely(e.target.value)}/>
//       </div>
//     )
//   }
//   // this.props = {
//   //   addNewGoal () {
      
//   //   }
//   // }
// }