const express = require('express')
const app = express()
const newGoalCtrl = require('./controllers/addNewGoal')
const SERVER_PORT = 4625

app.use(express.json())

app.get('/api/goal', newGoalCtrl.getNewGoal)
app.post('/api/goal', newGoalCtrl.postNewGoal)
app.put('/api/goal/:goal_id', newGoalCtrl.updateGoal)
app.delete('/api/goal/:goal_id', newGoalCtrl.deleteGoal)

app.listen(SERVER_PORT, () => 
  console.log(`Listening on port ${SERVER_PORT}`)
)