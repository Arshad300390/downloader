"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ImageCarouselPage() {
  const images = ["red", "green", "blue"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center p-6">
      <section className="w-full py-16 px-6 animate-fade-in max-w-4xl">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500 text-center mb-12">
          🖼️ Image Carousel
        </h2>

        {/* Carousel Container */}
        <div className="bg-white bg-opacity-80 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-6">
          <div
            data-testid="carousel-image"
            style={{
              backgroundColor: images[currentIndex],
              width: "100%",
              height: 500,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "1rem",
              fontSize: "2rem",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {images[currentIndex]}
          </div>

          <div className="flex gap-4">
            <button
              data-testid="prev-button"
              onClick={prev}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Prev
            </button>
            <button
              data-testid="next-button"
              onClick={next}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Next
            </button>
          </div>

          <Link href="/projects">
            <button className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
              ← Back to Projects
            </button>
          </Link>
        </div>
      </section>

      {/* Tailwind-friendly fade-in animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.2s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }                     
        }
      `}</style>
    </div>
  );
}
