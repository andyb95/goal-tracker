const express = require('express')
const app = express()
const newGoalCtrl = require('./Controllers.js')
const SERVER_PORT = 4625

app.use(express.json())

app.get('/api/goals', newGoalCtrl.getGoals)
app.post('/api/goals', newGoalCtrl.createGoal)
app.put('/api/goal/:goals_id', newGoalCtrl.updateGoal)
app.delete('/api/goal/:goals_id', newGoalCtrl.deleteGoal)

app.listen(SERVER_PORT, () => 
  console.log(`Listening on port ${SERVER_PORT}`)
)