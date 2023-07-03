const { Task } = require ('../models/index')

class Controller{
    static async getTasks ( req, res){
        try {
            const task = await Task.findAll()
            res.status(200).json(task)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                msg : "Internal server error"
            })
        }
    }
}


module.exports = Controller 