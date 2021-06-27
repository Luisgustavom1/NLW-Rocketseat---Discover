const Database = require('../db/config')

module.exports = {
    async create(req, res){
        const db = await Database()

        const password = req.body.password
        let roomId = ''
        let isRoom = true
        while(isRoom){
            for(var c = 0; c < 6; c++){
                roomId += Math.floor(Math.random() * 10).toString()
            }
            // verificar se o numero ja existe
            const roomsExistId = await db.all(`SELECT id FROM room`)

            isRoom = roomsExistId.some(roomsExistId => roomsExistId === roomId)
            // some --> verifica se existe roomExistId igual a roomId e se sim retorna true o primeiro der match retorna true e não continua verificando o resto
            if(!isRoom){
                await db.run(`INSERT INTO room (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${password}
                )`)
            }
        }
        await db.close()

        res.redirect(`/room/${roomId}`)
    }, 
    async open(req, res){
        const db = await Database()
        const roomId = req.params.roomId
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNoQuestions  

        if(questions.length == 0){
            if(questionsRead.length == 0){
                isNoQuestions = true
            }
        }
        res.render('room',{roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions})
    },
    
    enter(req, res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
}