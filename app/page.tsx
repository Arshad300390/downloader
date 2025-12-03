"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center justify-center p-6">

      {/* Hero Section */}
      <section className="w-full py-32 px-6 animate-fade-in">
        <div className="bg-white bg-opacity-80 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500 mb-6">
            Hi, I&apos;m <span className="text-cyan-400">Arshad Ali</span>
          </h1>

          <p className="text-gray-700 text-lg mb-10">
            Full-Stack Developer | React Native | Next.js | WebRTC
          </p>

          <a
            href="/projects"
            className="inline-block px-8 py-4 bg-linear-to-r from-pink-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            🚀 View My Work
          </a>
        </div>
      </section>

      {/* Optional extra section */}
      <div className="mt-16 text-gray-200 text-center">
        <p>Welcome to my portfolio. Explore my projects and skills!</p>
      </div>

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
