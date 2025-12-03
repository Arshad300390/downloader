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
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="p-5 border border-gray-800 rounded-lg hover:bg-gray-800/40">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
