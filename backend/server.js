const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const cron = require("node-cron");

const patientRouter = require('./routes/patients');
const doctorRouter = require('./routes/doctors');
const hospitalRouter = require('./routes/hospital');
const update_doctor_slots = require('./services/cronjobs/update_doctor_slots');
const update_appointments = require('./services/cronjobs/update_appointments');

app.use(cors({
  origin : '*'
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/patients',patientRouter);
app.use('/doctors',doctorRouter);
app.use('/hospitals',hospitalRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

cron.schedule("0 0 * * *", () => {
  update_doctor_slots();
  update_appointments();
});