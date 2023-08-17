import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex items-center justify-between w-full max-w-5xl px-8 py-4 mx-auto">
      <Link href="/">Home</Link>
      <Link href="/venues">Venues</Link>
    </header>
  );
}
