import React, { useContext, useState } from "react";
import styles from "@/components/common/AdminHeader/adminheader.module.css";

const Checkin = () => {
	return (
		<>
			<Button variant="solid" className={styles.bookBtn}>
				Check IN
			</Button>
		</>
	);
};

export default Checkin;
