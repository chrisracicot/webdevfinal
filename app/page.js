import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold animate-fadeIn">
        Welcome to My Portfolio
      </h1>
      <p className="mt-4 text-lg">Explore my certificates and web apps!</p>

      {/* Window-like link */}
      <div className="mt-8 border-4 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
        <Link
          href="/certificates"
          className="block w-64 h-48 bg-cover bg-center"
          style={{
            backgroundImage: "url('/certificates/Hackathon-Participation.png')",
          }}
        >
          <div className="bg-black bg-opacity-50 text-center text-white h-full flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold">View Certificates</h2>
            <p className="text-sm">Click to explore</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
