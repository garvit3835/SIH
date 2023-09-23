const pgp = require('pg-promise')();
require('dotenv').config();
const db = pgp(process.env.DB_STRING);

const newSlots = [
  {
    start: '2023-10-01 09:00:00',
    end: '09:30:00',
    hospital: 1,
    doctor: 1,
    booked_patients: 0,
    max_patients: 5,
    is_repeat: false,
  },
  {
    start: '2023-09-22 10:00:00',
    end: '10:30:00',
    hospital: 1,
    doctor: 1,
    booked_patients: 0,
    max_patients: 5,
    is_repeat: false,
  }
];

async function update_doctor_slots(d_id, slots) {
  const deleteQuery = 'DELETE FROM doctor_slots WHERE doctor = $1'; // Use a parameterized query

  try {
    await db.none(deleteQuery, [d_id]);
    const columns = ['start', 'end', 'hospital', 'doctor', 'booked_patients', 'max_patients', 'is_repeat'];
    const insertQuery = pgp.helpers.insert(slots, columns, 'doctor_slots');
    await db.none(insertQuery);
  } catch (error) {
    console.error(error);
  } finally {
    pgp.end();
  }
}

update_doctor_slots(1, newSlots);

module.exports = update_doctor_slots;
