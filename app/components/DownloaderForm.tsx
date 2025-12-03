"use client"; // required if using hooks in Next.js App Router

import React, { useState } from "react";

export default function DownloaderForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

interface DownloadRequestBody {
    url: string;
}

interface DownloadResponse {
    error?: string;
    [key: string]: unknown;
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!url.trim()) {
        setMessage("⚠️ Please enter a video URL.");
        return;
    }

    setLoading(true);
    setMessage("");

    try {
        // Example: call your backend API (you’ll create this route later)
        const response = await fetch("/api/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url } as DownloadRequestBody),
        });

        const data: DownloadResponse = await response.json();

        if (response.ok) {
            setMessage("✅ Download started successfully!");
        } else {
            setMessage(`❌ Error: ${data.error || "Something went wrong."}`);
        }
    } catch (err) {
        setMessage("❌ Network error or invalid URL.");
    } finally {
        setLoading(false);
    }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
    >
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter video URL"
        className="flex-1 p-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-3 bg-blue-600 rounded text-white font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Downloading..." : "Download"}
      </button>

      {message && (
        <p className="mt-3 w-full text-center text-sm text-gray-300">
          {message}
        </p>
      )}
    </form>
  );
}
