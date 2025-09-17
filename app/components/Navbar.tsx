import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-600">Radiance</h1>
      <div className="space-x-4">
        <Link href="/home" className="hover:text-pink-500">Home</Link>
        <Link href="/analyze" className="hover:text-pink-500">Analyze</Link>
        <Link href="/profile" className="hover:text-pink-500">Profile</Link>
        <Link href="/settings" className="hover:text-pink-500">Settings</Link>
      </div>
    </nav>
  );
}
