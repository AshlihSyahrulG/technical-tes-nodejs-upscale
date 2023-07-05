const { Task } = require ('../models/index')

class Controller{
    static async getTasks ( req, res, next){
        try {
            const task = await Task.findAll()
            res.status(200).json(task)
        } catch (error) {
            next (error)
        }
    }
    static async getTasksById (req,res,next){
        const { id } = req.params
        try {
            const taskById = await Task.findByPk(id)
            if(!taskById){
                throw { name: "TaskNotFound"}
            } 
            res.status(200).json(taskById)
        } catch (error) {
            next (error)
        }
    }
    static async postTask( req, res, next){
        try {
            const { title, Description } = req.body
            const task = await Task.create({
                title,Description
            })
            res.status(201).json(task)
        } catch (error) {
            next (error)
        } 
    }
    static async patchTask(req, res, next){
        try {
            const { id } = req.params
            const { title, Description, Completed} = req.body
            const findTask = await Task.findByPk(id)
            if(!findTask){
                throw { name: "TaskNotFound"}
            }
            const task = await Task.update({title, Description, Completed},{
                where : { id },
                returning : true
            })
            res.status(201).json({
                message :`successfully update the task with id ${id}`
            })
        } catch (error) {
            next(error)
        }
    }
    static async deleteTask(req, res, next){
        try {
            const { id } = req.params
            const findTask = await Task.findByPk(id)
            if (!findTask){
                throw { name: "TaskNotFound"}
            }
            const task = await Task.destroy({
                where: {id}
            })
            res.status(200).json({
                message : `succesfully delete task with id ${id}`
            })
        } catch (error) {
            next (error)
        }
    }
}


module.exports = Controller 