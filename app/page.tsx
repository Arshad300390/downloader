import   DownloaderForm  from '@components/DownloaderForm';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-700 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">🎬 Universal Video Downloader</h1>
      <DownloaderForm />
      <footer className="mt-10 text-sm text-gray-500">
        Built with ❤️ using Next.js + Tailwind
      </footer>
    </main>
  );
}