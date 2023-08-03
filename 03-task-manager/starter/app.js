const express = require('express');
const app = express();
const tasks = require("./routes/task")
const connectDB = require('./db/connect')

require('dotenv').config()

//middleware

app.use(express.json())

//routes

app.get('/', (req, res) => {
    res.send('Task Manager App')
})

app.use("/api/v1/task", tasks)

const port = 8000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening in port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()

