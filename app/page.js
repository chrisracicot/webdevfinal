"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    async function fetchJoke() {
      try {
        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        });
        const data = await response.json();
        setJoke(data.joke || "No joke available today.");
      } catch (error) {
        console.error("Error fetching joke:", error);
        setJoke("Failed to load the joke of the day.");
      }
    }

    fetchJoke();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center">
      <h1 className="mt-8 text-5xl sm:text-4xl font-bold animate-fadeIn">
        Christin Racicot's Portfolio
      </h1>
      <p className="mt-4 text-lg text-center px-4">
        Explore my profiles, certificates and web apps!
      </p>

      {/* Grid container for links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <CertificateLink
          href="/certificates"
          bgImage="url('/certificates/Hackathon-Participation.png')"
          title="View Certificates"
        />
        <CertificateLink
          href="https://github.com/chrisracicot"
          bgImage="url('/images/github.png')"
          title="GitHub Profile and Resume"
        />
        <CertificateLink
          href="https://www.linkedin.com/in/chris-racicot-a15314295/"
          bgImage="url('/images/linkedin.png')"
          title="LinkedIn Profile"
        />
        <CertificateLink
          href="https://cprg306-assignments-sandy-six.vercel.app/week-8"
          bgImage="url('/images/shoppinglist.png')"
          title={
            <>
              <span>Next.js Web App</span>
              <br />
              <span>using API for Meal Ideas</span>
            </>
          }
        />
      </div>

      {/* Joke of the Day Section */}
      <div className="m-12 p-3 bg-white bg-opacity-60 text-black rounded-lg shadow-md border border-black w-3/5 sm:w-2/5">
        <h2 className="text-sm font-semibold text-center">
          Joke of the Day - API
        </h2>
        <p className="mt-2 text-sm text-center">{joke}</p>
      </div>
    </div>
  );
}

function CertificateLink({ href, bgImage, title }) {
  return (
    <div className="border-4 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
      <Link
        href={href}
        className="block w-64 h-48 bg-cover bg-center"
        style={{ backgroundImage: bgImage }}
      >
        <div className="bg-black bg-opacity-50 text-center text-white h-full flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </Link>
    </div>
  );
}
