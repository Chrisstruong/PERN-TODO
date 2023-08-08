const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

// middle ware
app.use(cors())
app.use(express.json())

// ROUTES//

// create a todo
app.post("/todos", async (req, res) => {
    // await
    try {
        const {description} = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING * ", [description])

        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

// get all todos

app.get("/todos", async(req, res)=> {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    } catch {
        console.error(err.message)
    }
})

// get a todo
app.get("/todos/:id", async(req, res) => {
    try{
        console.log(req.params)
    } catch {
        console.error(err.message)
    }
} )

// update a todo

//delete a todo


app.listen(1000, () => {
    console.log("server has started on port 1000")
})