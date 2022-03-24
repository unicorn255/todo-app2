
const express = require('express')
const mongoose = require ('mongoose')
const app = express();
app.use(express.json());

const AuthRoute = require('./routes/auth')

mongoose.connect('mongodb://localhost:3000/todo-app2', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err);
} )
db.once('open', ()=>{
    console.log('Database connected');
}
)

app.listen(port, (req) => {
    req.
    console.log('Server is running http://localhost:'+port);
});

app.use('/api/employee', EmployeeRoute)
app.use('/api', AuthRoute)