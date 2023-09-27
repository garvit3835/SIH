import React, { useEffect, useMemo, useState } from "react";
import styles from "./doctor.module.css";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Container, Heading } from "@chakra-ui/react";
import AppointmentCard from "@/components/doctor/AppointmentCard";
import { useRouter } from "next/router";
import { doctorAppointments } from "@/api/data";

export default function Home() {
  const [data, setData] = useState([]);
  const [currentApp, setCurrentApp] = useState([]);
  const router = useRouter();

  const filteredData = useMemo(
    () =>
      data.filter((d) => {
        // console.log(
        //   d.patient_name
        //     .toLowerCase()
        //     .indexOf(decodeURIComponent(router.query.search).toLowerCase())
        // );

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
    setData(doctorAppointments.filter((app) => app.status !== 0));
    setCurrentApp(doctorAppointments.filter((app) => app.status === 0));
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
