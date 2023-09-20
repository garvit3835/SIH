import React from "react";
import styles from "./header.module.css";
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <Container className={styles.headerMain} maxW="container.lg">
        <div className={styles.logo}>MediBridge</div>

        <InputGroup className={styles.search}>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch />
          </InputLeftElement>
          <Input type="tel" placeholder="Search a Doctor..." />
        </InputGroup>

        <Button variant="solid" className={styles.bookBtn}>
          Book Appointment
        </Button>

        <Menu>
          <MenuButton>
            Profile <ChevronDownIcon />
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
        <Navbar />
      </Container>
    </div>
  );
};

export default Header;
