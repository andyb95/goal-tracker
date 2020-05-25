let goals = []
let id = 1


module.exports = {

  getGoals: (req, res) => {
    res.status(200).send(goals)
  },

  createGoal: (req, res) => {
    const { name, timeline } = req.body
    const didComplete = []
    const avg = 0
    const newGoal = {id, name, timeline, didComplete, avg }

    goals.push(newGoal)

    id++
    
    res.status(200).send(goals)
    
  },

  //Fix This
  updateGoal: (req, res) => {
    const { goals_id } = req.params
    const {num} =req.body


    const index = goals.findIndex((element) => element.id === +goals_id)

    if (index === -1) {
      res.status(404).send('Goal not found')
    } else {
      goals[index].didComplete.push(num)

      goals[index].avg = goals[index].didComplete.reduce((a,b) => a+b, 0) / goals[index].didComplete.length

      goals[index].avg = Math.round(goals[index].avg*100)

      res.status(200).send(goals)
    }

    
  },

  deleteGoal: (req, res) => {
    const { goals_id } = req.params

    const index = goals.findIndex((element) => element.id === +goals_id)

    if (index === -1) {
      res.status(404).send('Goal not found')
    }else{
      goals.splice(index, 1)
  
      res.status(200).send(goals)
    }

  }

}