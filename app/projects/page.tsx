"use client";

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
  },
  {
    title: "Portfolio Website",
    desc: "Next.js | Tailwind CSS | Vercel",
  },
];

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
