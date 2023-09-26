import React, { useEffect, useMemo, useState } from "react";
import styles from "./doctor.module.css";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Container, Heading } from "@chakra-ui/react";
import AppointmentCard from "@/components/doctor/AppointmentCard";
import { useRouter } from "next/router";

const apiDummy = [
  {
    a_id: 1,
    patient: 101,
    doctor: 201,
    hospital: 301,
    description: "Regular Checkup",
    time: "2023-09-20T10:00:00.000Z",
    is_emergency: 0,
    status: 0,
    prescription: null,
    patient_name: "John Doe",
    hospital_name: "Sample Hospital 1",
    hospital_address: "123 Main St, Sample City, USA",
  },
  {
    a_id: 2,
    patient: 102,
    doctor: 201,
    hospital: 302,
    description: "Dental Cleaning",
    time: "2023-09-20T14:30:00.000Z",
    is_emergency: 0,
    status: -1,
    prescription: null,
    patient_name: "Alice Smith",
    hospital_name: "Sample Hospital 2",
    hospital_address: "456 Elm St, Sample Town, USA",
  },
  {
    a_id: 3,
    patient: 103,
    doctor: 202,
    hospital: 301,
    description: "Eye Examination",
    time: "2023-09-21T11:15:00.000Z",
    is_emergency: 0,
    status: 1,
    prescription: null,
    patient_name: "Bob Johnson",
    hospital_name: "Sample Hospital 1",
    hospital_address: "123 Main St, Sample City, USA",
  },
];

export default function Home() {
  const [data, setData] = useState([]);
  const [currentApp, setCurrentApp] = useState([]);
  const router = useRouter();

  const filteredData = useMemo(
    () =>
      data.filter((d) => {
        console.log(
          d.patient_name
            .toLowerCase()
            .indexOf(decodeURIComponent(router.query.search).toLowerCase())
        );

        return router.query.search
          ? d.patient_name
              .toLowerCase()
              .indexOf(decodeURIComponent(router.query.search).toLowerCase()) >=
              0
          : true;
      }),
    [router.query.search, data]
  );

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
        {filteredData.map((app) => (
          <AppointmentCard data={app} key={app.a_id} />
        ))}
      </div>
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
