"use client";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center p-6">
      {/* Avatar Card */}
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center animate-fade-in mb-12">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="https://api.dicebear.com/7.x/bottts/svg?seed=funtastic"
            alt="Avatar"
            width={112}
            height={112}
            className="rounded-full border-4 border-blue-300 shadow-lg mb-4 animate-bounce"
          />
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500 mb-2">
            Hi, I&apos;m Dev!
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            Creative coder, lifelong learner, and digital explorer 🚀
          </p>
        </div>

        <div className="mt-8">
          <a
            href="mailto:funtastic.dev@email.com"
            className="inline-block px-6 py-3 bg-linear-to-r from-pink-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            📧 Contact Me
          </a>
        </div>
      </div>

      {/* Full-Width Skills Section */}
      <section className="w-full bg-white bg-opacity-80 py-16 px-6 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-12">💻 My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-linear-to-r from-yellow-200 to-pink-200 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Frontend</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>React & Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">Backend</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Node.js</li>
              <li>Laravel</li>
            </ul>
          </div>

          <div className="bg-linear-to-r from-green-200 to-teal-200 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Languages</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>TypeScript & JavaScript</li>
              <li>Node.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>PHP</li>
            </ul>
          </div>

          <div className="bg-linear-to-r from-purple-200 to-pink-300 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Database</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>SQLite</li>
            </ul>
          </div>

          <div className="bg-linear-to-r from-blue-200 to-indigo-200 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Other</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Postman</li>
              <li>Git & GitHub</li>
              <li>API Integration</li>
            </ul>
          </div>
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
