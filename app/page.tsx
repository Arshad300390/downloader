export default function Home() {
  return (
    <div className="max-w-5xl mx-auto text-center pt-32">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I&apos;m <span className="text-cyan-400">Arshad Ali</span>
      </h1>

      <p className="text-lg text-gray-300 mb-8">
        Full-Stack Developer | React Native | Next.js | WebRTC
      </p>

      <a
        href="/projects"
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-lg text-lg font-semibold transition"
      >
        View My Work
      </a>
    </div>
  );
}
