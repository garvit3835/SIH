import React, { useState } from "react";
import styles from "./header.module.css";
import {
  Avatar,
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { ChevronDownIcon } from "@chakra-ui/icons";
// import Navbar from "../Navbar";
// import BookAppointment from "../../Patient/BookAppo intment";
// import AdminNavbar from "../../AdminNavbar";
import DoctorNavbar from "../Navbar";
import { useRouter } from "next/router";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [checkedIn, setCheckedIn] = useState(false);

  const router = useRouter();

  const search = (query) => {
    router.push(`?search=${encodeURIComponent(query)}`, undefined, {
      shallow: true,
    });
  };

  return (
    <div className={styles.header}>
      <Container className={styles.headerMain} maxW="container.lg">
        <div className={styles.logo}>MediBridge</div>

        <InputGroup className={styles.search} background="whiteAlpha.800">
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Search a Patient..."
            onChange={(e) => {
              search(e.target.value);
            }}
          />
        </InputGroup>

        <Button
          variant="solid"
          className={styles.bookBtn}
          onClick={() => {
            setCheckedIn((old) => !old);
          }}
          isDisabled
        >
          {checkedIn ? "Check Out" : "Check In"}
        </Button>

        <Menu>
          <MenuButton>
            <Flex justifyContent="center" alignItems="center" gap="0.5rem">
              <Avatar name="Karanjot Singh" src="" size="sm" />{" "}
              <span>
                <ChevronDownIcon />{" "}
              </span>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Reports </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Container>
      <Container maxW="container.lg">
        <DoctorNavbar />
      </Container>
    </div>
  );
};

export default Header;
