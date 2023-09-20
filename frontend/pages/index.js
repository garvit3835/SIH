import Link from "next/link";
import DashboardLayout from "../components/layouts/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <Link href="/auth/login">Login</Link>
      <br />
      <Link href="/auth/signup">Signup</Link>
    </DashboardLayout>
  );
}
