import Link from "next/link";
import DashboardLayout from "../../components/layouts/DashboardLayout";

export default function Home() {
  return <>Here are all your reports</>;
}

Home.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
