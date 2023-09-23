import DashboardLayout from "../../components/layouts/DashboardLayout";

export default function Home() {
  return <>Here are all the Doctors</>;
}

Home.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
