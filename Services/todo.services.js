const Todomodel = require("../Model/todo.model");

class ToDoServices{
    static async createTodo(userId,title,desc){
        const createTodo = new Todomodel({userId,title,desc});
        return await createTodo.save();
    }

    static async getTodoData(userId){
        const todoData = await Todomodel.find({userId})
        return todoData;
    }

    static async deleteTodo(id){
        const deleted = await Todomodel.findOneAndDelete({_id:id})
        return deleted;
    }
    
}

module.exports = ToDoServices;