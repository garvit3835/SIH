import Link from "next/link";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import { useEffect, useMemo, useState } from "react";
import styles from "./doctors.module.css";
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
import { useRouter } from "next/router";
// import Image from "next/image";

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
  const [data, setData] = useState([]);
  const router = useRouter();

  const filteredData = useMemo(
    () =>
      data.filter((d) => {
        console.log(
          d.name
            .toLowerCase()
            .indexOf(decodeURIComponent(router.query.search).toLowerCase())
        );

        return router.query.search
          ? d.name
              .toLowerCase()
              .indexOf(decodeURIComponent(router.query.search).toLowerCase()) >=
              0
          : true;
      }),
    [router.query.search, data]
  );

  useEffect(() => {
    setData(tempData);
  }, []);

  if (!data) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <Container maxW="container.lg" className={styles.main}>
      <div className={styles.mainList}>
        {filteredData.map((doctor) => (
          <Card
            key={doctor.id}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="elevated"
            className={styles.doc}
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
                  className={styles.bookBtn}
                >
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  colorScheme="teal"
                  className={styles.viewBtn}
                  ml={2}
                  as={Link}
                  href={`/p/doc/${doctor.id}`}
                >
                  More Details
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
