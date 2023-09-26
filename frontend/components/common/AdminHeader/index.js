import React from "react";
import styles from "./adminheader.module.css";
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


import AddDoctor from "@/components/Hospital/AddDoc";
import AdminNavbar from "../AdminNavbar";

const AdminHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className={styles.header}>
      <Container className={styles.headerMain} maxW="container.lg">
      <img src="/images/Logo.svg" alt="" width={30}/>
        <div className={styles.title}>MediBridge</div>

        <InputGroup className={styles.search} background="whiteAlpha.800">
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch />
          </InputLeftElement>
          <Input type="tel" placeholder="Search a Doctor..." />
        </InputGroup>

        <AddDoctor/>

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
        <AdminNavbar/>
      </Container>
    </div>
  );
};

export default AdminHeader;
