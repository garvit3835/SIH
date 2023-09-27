import Link from "next/link";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useEffect, useMemo, useState } from "react";
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
import { useRouter } from "next/router";
import { patientAppointments } from "@/api/data";

export default function Home() {
  const [data, setData] = useState([]);
  const [currentApp, setCurrentApp] = useState();
  const router = useRouter();

  const filteredData = useMemo(
    () =>
      data.filter((d) => {
        // console.log(
        //   d.doctor_name
        //     .toLowerCase()
        //     .indexOf(decodeURIComponent(router.query.search).toLowerCase())
        // );

        return router.query.search
          ? d.doctor_name
              .toLowerCase()
              .indexOf(decodeURIComponent(router.query.search).toLowerCase()) >=
              0
          : true;
      }),
    [router.query.search, data]
  );

  useEffect(() => {
    setData(patientAppointments.filter((app) => app.status !== 0));
    setCurrentApp(patientAppointments.filter((app) => app.status === 0));
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
