export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">
        <span className="text-black text-4xl">Ja</span><span className="text-yellow-500 text-4xl">doo</span>
      </h1>
      <ul className="hidden md:flex gap-10 text-gray-700 text-sm font-medium">
        <li>Destinations</li>
        <li>Hotels</li>
        <li>Flights</li>
        <li>Bookings</li>
      </ul>
      <div className="flex gap-7 items-center text-sm font-medium text-gray-700">
        <button >Login</button>
        <button className="border px-4 py-2 rounded-md">Sign up</button>
        <span className="ml-2">EN </span>
      </div>
    </nav>
  );
}
