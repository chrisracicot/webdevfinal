"use client";
import React, { useState } from "react";
import certificates from "../certificates.json";
import Link from "next/link";

export default function CertificatesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(null);

  const openModal = (certificate) => {
    setCurrentCertificate(certificate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentCertificate(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Home Button */}
      <div className="container mx-auto px-4 mb-8">
        <Link href="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">
            Home
          </button>
        </Link>
      </div>

      {/* Certificates Grid */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          My Certificates
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition cursor-pointer flex flex-col items-center"
              onClick={() => openModal(certificate)}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {certificate.title}
              </h2>
              <p className="text-gray-600 mb-4">{certificate.date}</p>
              <img
                src={certificate.file}
                alt={certificate.title}
                className="w-full h-40 object-contain rounded"
              />
              <p className="text-blue-500 text-sm mt-2 hover:underline text-center">
                Click to view full screen
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && currentCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-4 w-11/12 md:w-2/3 lg:w-1/2">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {currentCertificate.title}
            </h2>
            <img
              src={currentCertificate.file}
              alt={currentCertificate.title}
              className="w-full h-96 object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}
