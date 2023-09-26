import React from "react";
import styles from "./appointmentCard.module.css";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

const AppointmentCard = ({ data, showFooter }) => {
  return (
    <Card
      key={data.a_id}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      className={styles.appoint}
    >
      <Avatar
        size="xl"
        name={data.doctor_name.replace("Dr. ", "")}
        className={styles.docAvatar}
        src={data.image}
      />

      <Stack flex={1}>
        <CardBody paddingY={0}>
          <Heading
            mt={4}
            fontWeight={400}
            variant="outline"
            py={1}
            borderRadius="full"
            size="lg"
          >
            {data.description}
          </Heading>

          <Heading size="md">
            {data.doctor_name}{" "}
            <Text as="i" fontWeight={400} fontSize={16} marginLeft={2}>
              {data.specialization}
            </Text>
          </Heading>

          {data.is_emergency ? (
            <div>
              <Badge colorScheme="red">Emergency</Badge>
            </div>
          ) : null}

          {/* <Tag
            mt={4}
            fontWeight={500}
            variant="outline"
            py={1}
            borderRadius="full"
          >
            {data.description}
          </Tag> */}

          <Divider my={3} borderColor="teal.300" />

          <Text fontWeight={500}>{data.hospital_name}</Text>
          <Text>{data.hospital_address}</Text>
          <Text
            pb="2"
            color="teal.700"
            cursor="pointer"
            textDecoration="underline"
          >
            {data.hospital_number}
          </Text>
        </CardBody>

        {showFooter && (
          <CardFooter>
            <Button
              variant="solid"
              colorScheme="teal"
              className={styles.docBtn}
            >
              Cancel Appointment
            </Button>
          </CardFooter>
        )}
      </Stack>
    </Card>
  );
};

export default AppointmentCard;
