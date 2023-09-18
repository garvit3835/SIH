const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

const patientRouter = require('./routes/patients');
// const patientRouter = require('./routes/patients');
// const patientRouter = require('./routes/patients');

app.use(cors({
  origin : '*'
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/patient',patientRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})