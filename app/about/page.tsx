"use client";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center justify-center p-6">
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center animate-fade-in">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="https://api.dicebear.com/7.x/bottts/svg?seed=funtastic"
            alt="Avatar"
            width={112}
            height={112}
            className="rounded-full border-4 border-blue-300 shadow-lg mb-4 animate-bounce"
          />
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500 mb-2">
            Hi, I&apos;m Funtastic Dev!
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            Creative coder, lifelong learner, and digital explorer 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="bg-linear-to-r from-yellow-200 to-pink-200 rounded-xl p-4 shadow-md hover:scale-105 transition-transform">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span role="img" aria-label="Code">💻</span> Skills
            </h2>
            <ul className="text-left text-gray-700 list-disc list-inside">
              <li>React & Next.js</li>
              <li>TypeScript & JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div className="bg-linear-to-r from-blue-200 to-purple-200 rounded-xl p-4 shadow-md hover:scale-105 transition-transform">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span role="img" aria-label="Hobbies">🎨</span> Hobbies
            </h2>
            <ul className="text-left text-gray-700 list-disc list-inside">
              <li>Digital Art & Design</li>
              <li>Gaming & Streaming</li>
              <li>Music Production</li>
              <li>Travel & Photography</li>
            </ul>
          </div>
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

      {/* Tailwind-friendly fade-in animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.2s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}
