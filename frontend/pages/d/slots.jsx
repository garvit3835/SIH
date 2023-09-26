import React, { useState } from "react";
import { format } from 'date-fns';

export default function Slots() {
  const [slots, setSlots] = useState([
    {
      s_id: 1,
      start: "2023-09-20T08:00:00.000Z",
      end: "08:30:00",
      hospital_name: "Sample Hospital 1",
      hospital_address: "123 Main St, Sample City, USA",
      doctor: 123,
      booked_patients: 5,
      max_patients: 10,
      is_repeat: true,
    },
    {
      s_id: 2,
      start: "2023-09-20T09:00:00.000Z",
      end: "09:30:00",
      hospital_name: "Sample Hospital 2",
      hospital_address: "456 Elm St, Sample Town, USA",
      doctor: 123,
      booked_patients: 3,
      max_patients: 15,
      is_repeat: false,
    },
    {
      s_id: 3,
      start: "2023-09-21T10:00:00.000Z",
      end: "10:30:00",
      hospital_name: "Sample Hospital 3",
      hospital_address: "789 Oak St, Sample Village, USA",
      doctor: 123,
      booked_patients: 8,
      max_patients: 12,
      is_repeat: true,
    },
  ]);

  return (
    <div className="slots-container">
      {slots.map((slot, i) => (
        <div key={i} className="slot-card">
          <div className="slot-card-header">
            <p className="slot-date">
              {format(new Date(slot.start), 'MM/dd/yyyy')}{" "}
              {new Date(slot.start).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false, // Use 24-hour format
              })}{" "}
              - {slot.end}
            </p>
            <p className="hospital-name">{slot.hospital_name}</p>
          </div>
          <div className="slot-card-body">
            <p className="hospital-address">{slot.hospital_address}</p>
            <p className="booked-appointments">
              Booked Appointments: {slot.booked_patients}
            </p>
            <p className="appointments-left">
              Appointments Left: {slot.max_patients - slot.booked_patients}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
