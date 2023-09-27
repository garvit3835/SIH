import Link from "next/link";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useEffect, useState } from "react";
import styles from "./p.module.css";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
// import Image from "next/image";
import cn from "classnames";
import AppointmentCard from "@/components/Patient/AppointmentCard";

const tempData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    hospital: "XYZ Hospital",
    image: "doctor1.jpg", // You can place the doctor's image in the public folder
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialization: "Pediatrician",
    hospital: "ABC Children's Hospital",
    image: "doctor2.jpg",
  },
  // Add more doctors as needed
];

const apiDummy = [
  {
    a_id: 1,
    patient: 101,
    doctor_name: "Dr. John Smith",
    doctor_number: 1234567890,
    specialization: "Cardiologist",
    rating: 4.8,
    hospital_name: "Sample Hospital 1",
    hospital_number: 9876543210,
    hospital_address: "123 Main St, Sample City, USA",
    description: "Regular Checkup",
    time: "2023-09-20T10:00:00.000Z",
    is_emergency: 0,
    status: 0,
    prescription: null,
  },
  {
    a_id: 2,
    patient: 101,
    doctor_name: "Dr. Alice Johnson",
    doctor_number: 9876543210,
    specialization: "Dermatologist",
    rating: 4.5,
    hospital_name: "Sample Hospital 2",
    hospital_number: 1234567890,
    hospital_address: "456 Elm St, Sample Town, USA",
    description: "Skin Check",
    time: "2023-09-21T14:30:00.000Z",
    is_emergency: 1,
    status: 1,
    prescription: null,
  },
  {
    a_id: 3,
    patient: 101,
    doctor_name: "Dr. Bob Doe",
    doctor_number: 5555555555,
    specialization: "Orthopedic Surgeon",
    rating: 4.9,
    hospital_name: "Sample Hospital 1",
    hospital_number: 9876543210,
    hospital_address: "123 Main St, Sample City, USA",
    description: "Knee Pain Consultation",
    time: "2023-09-22T11:15:00.000Z",
    is_emergency: 0,
    status: -1,
    prescription: null,
  },
];

export default function Home() {
  const [data, setData] = useState();
  const [currentApp, setCurrentApp] = useState();

  useEffect(() => {
    setData(apiDummy.filter((app) => app.status !== 0));
    setCurrentApp(apiDummy.filter((app) => app.status === 0));
  }, []);

  if (!data) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <Container maxW="container.lg" className={styles.main}>
      {currentApp && (
        <>
          <Heading size="md" marginBottom={5}>
            Your Current Appointment
          </Heading>

          <div className={styles.mainList}>
            {currentApp.map((app) => (
              <AppointmentCard data={app} key={app.a_id} showFooter={true} />
            ))}
          </div>
        </>
      )}

      <Heading size="md" marginY={5}>
        All Previous Appointments
      </Heading>

      <div className={styles.mainList}>
        {data.map((app) => (
          <AppointmentCard data={app} key={app.a_id} />
        ))}
      </div>
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
