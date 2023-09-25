import DashboardLayout from "../../components/layouts/DashboardLayout";

export default function Home() {
  return <>Here are all the Admin</>;
}

Home.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
