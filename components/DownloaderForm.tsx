import React from 'react';

export default function DownloaderForm() {
  return (
    <form>
      {/* Your form fields go here */}
      <input type="text" placeholder="Enter video URL" className="p-2 rounded text-black bg-gray-300" />
      <button type="submit" className="ml-2 p-2 bg-blue-600 rounded text-white">Download</button>
    </form>
  );
}