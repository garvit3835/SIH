import Link from "next/link";
import DashboardLayout from "../../components/layouts/DashboardLayout";

export default function Home() {
  return (
    <>
      <Link href="/auth/login">Login</Link>
      <br />
      <Link href="/auth/signup">Signup</Link>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
