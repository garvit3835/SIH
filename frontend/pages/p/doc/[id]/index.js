import Link from "next/link";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import { useRouter } from "next/router";
import styles from "./doc.module.css";
import { Avatar, Container, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { doctorsList } from "@/api/data";

export default function Home() {
  const router = useRouter();
  console.log(router.query.id);
  const [doctor, setDoctor] = useState();

  useEffect(() => {
    setDoctor(doctorsList.find((doctor) => doctor.id == router.query.id));
  }, [doctorsList, router.query.id]);

  if (!doctor) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <Container maxW="container.lg" className={styles.main}>
      <div className={styles.docBasic}>
        <Avatar
          name={doctor.name.replace("Dr. ", "")}
          src={doctor.image}
          size="2xl"
        />
        <div className={styles.docBasicMain}>
          <Heading>{doctor.name}</Heading>
          <Text fontSize={20}>{doctor.specialization}</Text>
        </div>
      </div>
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
