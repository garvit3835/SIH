import React, { useState } from "react";
import styles from "./queueCard.module.css";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import cn from "classnames";

export default function QueueCard({ data }) {
  const [diagnosed, setDiagnosed] = useState(false);

  return (
    <Card
      key={data.a_id}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      className={cn(styles.appoint, { [styles.diagnosed]: diagnosed })}
    >
      <Avatar
        size="xl"
        name={data.patient_name}
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
            {data.patient_name}{" "}
            <Text as="i" fontWeight={400} fontSize={16} marginLeft={2}>
              {data.specialization}
            </Text>
          </Heading>

          {data.is_emergency ? (
            <div>
              <Badge colorScheme="red">Emergency</Badge>
            </div>
          ) : null}
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="purple"
            className={styles.docBtn}
            onClick={() => {
              setDiagnosed(true);
            }}
            isDisabled={diagnosed}
          >
            Diagnosed
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
