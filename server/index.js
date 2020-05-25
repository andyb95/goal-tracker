const express = require('express')
const app = express()
const newGoalCtrl = require('./Controllers.js')
const SERVER_PORT = 4625

app.use(express.json())

app.put('/api/edit/:goals_id', newGoalCtrl.updateGoal)
app.get('/api/goals', newGoalCtrl.getGoals)
app.post('/api/goals', newGoalCtrl.createGoal)
app.delete('/api/goals/:goals_id', newGoalCtrl.deleteGoal)

app.listen(SERVER_PORT, () => 
  console.log(`Listening on port ${SERVER_PORT}`)
)