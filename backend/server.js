const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

const patientRouter = require('./routes/patients');
const doctorRouter = require('./routes/doctors');
const hospitalRouter = require('./routes/hospital');

app.use(cors({
  origin : '*'
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/patient',patientRouter);
app.use('/doctors',doctorRouter);
app.use('/hospital',hospitalRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})