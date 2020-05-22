const goal = [{id: 0, title: 'new goal', }]
let id = 1

module.exports = {

  getNewGoal: (req, res) => {
    res.status(200).send(goal)
  },

  postNewGoal: (req, res) => {
    const { name, title } = req.body

    const newGoal = {id, title}

    goal.push(newGoal)

    id++

    res.status(200).send(goal)
  },

  updateGoal: (req, res) => {
    const { goal_id } = req.params
    const { newName } = req.body

    const index = goal.findIndex((element) => element.id === +goal_id)

    if (index === -1) {
      return res.status(404).send('Goal not found')
    }

    goal[index].title = newTitle

    res.status(200).send(goal)
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