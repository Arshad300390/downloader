"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center p-6">
      
      {/* Contact Card */}
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-2xl p-10 max-w-3xl w-full text-center animate-fade-in">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500 mb-6">
          📬 Contact Me
        </h2>

        <p className="text-gray-700 text-lg mb-8">
          Feel free to reach out for collaboration, project work, or just to say hi! 🚀
        </p>

        <a
          href="mailto:your@email.com"
          className="inline-block px-8 py-4 bg-linear-to-r from-pink-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          ✉️ Send Email
        </a>
      </div>

      {/* Optional footer or extra spacing */}
      <div className="mt-12 text-gray-200 text-center">
        <p>Looking forward to connecting with you!</p>
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
