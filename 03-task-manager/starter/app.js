const express = require('express');
const app = express();
const tasks = require("./routes/task")

//middleware

app.use(express.json())

//routes

app.get('/', (req, res) => {
    res.send('Task Manager App')
})

app.use("/api/v1/task", tasks)

const port = 8000

app.listen(port, console.log(`Listening in port ${port}...`))