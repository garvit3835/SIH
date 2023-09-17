import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/auth/login">Login</Link>
      <br />
      <Link href="/auth/signup">Signup</Link>
    </main>
  );
}
