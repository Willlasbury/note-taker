const express = require('express');
const app = express();
const router = express.Router()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const allRoutes = require('./controllers');
app.use(allRoutes)


app.use(router)

app.listen(PORT,()=>{
console.log('listening on port http://localhost:' + PORT)})
