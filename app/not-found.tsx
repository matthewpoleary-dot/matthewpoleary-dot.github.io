import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-4 sm:px-8">
      <p className="label">404</p>
      <h1 className="display mt-4 text-6xl">Nothing here.</h1>
      <Link href="/" className="link mt-8 self-start text-lg">
        Back to the homepage
      </Link>
    </main>
  );
}
