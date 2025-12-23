"use client";

import { link } from "fs";
import Link from "next/dist/client/link";

const projects = [
  {
    title: "Video Calling App",
    desc: "React Native | WebRTC | CallKeep | Socket.io",
  },
  {
    title: "E-Commerce Web App",
    desc: "Next.js | MongoDB | Stripe",
  },
  {
    title: "Realtime Chat App",
    desc: "Socket.io | Node.js | MongoDB",
    href: "https://node-chat-app-f9sl.onrender.com/"
  },
  {
    title: "Portfolio Website",
    desc: "Next.js | Tailwind CSS | Vercel",
  },
];
const exercises = [
  {
    title: "Cart Exercise",
    desc: "A shopping cart implementation using React Context API",
    link: "/projects/cartApp",
  },
  {
    title: "Todo App",
    desc: "A simple todo app built with React",
    link: "/projects/todoApp",
  },
  {
    title: "Image Carousel",
    desc: "showing multiple images in a carousel format",
    link: "/projects/imageCarousel",
  },
  {
    title: "Code Review Feedback",
    desc: "A code review feedback application built with Next.js and Tailwind CSS",
    link: "/projects/codeReviewFeedback",
  },
  {
    title: "Article Sorter",
    desc: "An article sorter application built with Next.js and Tailwind CSS",
    link: "/projects/articleSort",
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center p-6">

      {/* Projects Section */}
      <section className="w-full py-16 px-6 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500 text-center mb-12">
          🚀 My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white bg-opacity-80 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform hover:shadow-3xl"
            >
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-700">{p.desc}</p>
              <div className="mt-auto flex justify-center">
                {p.href ? (
                  <Link href={p.href}>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
                      View Project
                    </button>
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
 <section className="w-full py-16 px-6 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500 text-center mb-12">
          🚀 Excercises
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {exercises.map((p, i) => (
            <div
              key={i}
              className="bg-white bg-opacity-80 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform hover:shadow-3xl flex flex-col h-full"
            >
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-700">{p.desc}</p>
              <div className="mt-auto flex justify-center">
                {p.link ? (
                  <Link href={p.link}>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
                      View Exercise
                    </button>
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
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
