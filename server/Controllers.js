let goals = []
let id = 1

module.exports = {

  getGoals: (req, res) => {
    res.status(200).send(goals)
  },

  createGoal: (req, res) => {
    const { name, timeline } = req.body
    const didComplete = []
    const newGoal = {id, name, timeline, didComplete }

    goals.push(newGoal)

    id++
    
    res.status(200).send(goals)
    
  },

  //Fix This
  updateGoal: (req, res) => {
    const { goal_id } = req.params

    const index = goals.findIndex((element) => element.id === +goal_id)

    if (index === -1) {
      return res.status(404).send('Goal not found')
    }

    const { checkDate } =  req.body
    goals[index].didComplete.push(checkDate)

    res.status(200).send(goals[index].didComplete)
  },

  deleteGoal: (req, res) => {
    const { goal_id } = req.params

    const index = goal.findIndex((element) => element.id === +goal_id)

    if (index === -1) {
      return res.status(404).send('Goal not found')
    }

    goal.splice(index, 1)

    res.status(200).send(goal)
  }

}