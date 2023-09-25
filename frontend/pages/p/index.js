import Link from "next/link";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useEffect, useState } from "react";
import styles from "./p.module.css";
import {
  Avatar,
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

export default function Home() {
  const [data, setData] = useState();
  const [currentApp, setCurrentApp] = useState();

  useEffect(() => {
    setData(tempData);
    setCurrentApp({
      doctorName: "Dr. John Doe",
      id: 2,
      name: "Dr. Jane Smith",
      specialization: "Pediatrician",
      hospital: "ABC Children's Hospital",
      image: "doctor2.jpg",
    });
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

          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="elevated"
            className={cn(styles.appoint, styles.current)}
          >
            <Avatar
              size="xl"
              name={currentApp.name.replace("Dr. ", "")}
              className={styles.docAvatar}
              src={currentApp.image}
            />

            <Stack>
              <CardBody paddingBottom={0}>
                <Heading size="md">
                  {currentApp.name}{" "}
                  <Text as="i" fontWeight={400} fontSize={16} marginLeft={2}>
                    {currentApp.specialization}
                  </Text>
                </Heading>

                <Text py="2">{currentApp.hospital}</Text>
              </CardBody>

              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="teal"
                  className={styles.docBtn}
                >
                  View Appointment
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </>
      )}

      <Heading size="md" marginBottom={5}>
        All Previous Appointments
      </Heading>

      <div className={styles.mainList}>
        {data.map((doctor) => (
          <Card
            key={doctor.id}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="elevated"
            className={styles.appoint}
          >
            <Avatar
              size="xl"
              name={doctor.name.replace("Dr. ", "")}
              className={styles.docAvatar}
              src={doctor.image}
            />

            <Stack>
              <CardBody paddingBottom={0}>
                <Heading size="md">
                  {doctor.name}{" "}
                  <Text as="i" fontWeight={400} fontSize={16} marginLeft={2}>
                    {doctor.specialization}
                  </Text>
                </Heading>

                <Text py="2">{doctor.hospital}</Text>
              </CardBody>

              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="teal"
                  className={styles.docBtn}
                >
                  Book Appointment
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </div>
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
