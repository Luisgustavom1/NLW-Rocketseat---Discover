const express = require('express')
const QuestionController = require('./controllers/QuestionControllers')
const RoomController = require('./controllers/roomController')
const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

route.get('/room/:roomId', RoomController.open)
// controller da criação de salas
route.post('/create-room', RoomController.create)
route.post('/enterroom', RoomController.enter)


// Formato do form
// Controller das questions
route.post('/question/:roomId/:questionId/:action', QuestionController.index) 
route.post('/question/create/:room', QuestionController.create)



module.exports = route
