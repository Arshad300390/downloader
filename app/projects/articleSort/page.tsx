"use client";
import React, { useState } from "react";

type Article = {
  title: string;
  upvotes: number;
  downvotes: number;
  date: string;
};

function VoteArticleCard({
  title,
  upvotes,
  downvotes,
  date,
  onVoteUp,
  onVoteDown,
}: {
  title: string;
  upvotes: number;
  downvotes: number;
  date: string;
  onVoteUp: () => void;
  onVoteDown: () => void;
}) {
  return (
    <div className="pa-6 w-80 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="mb-2">
        📅 <strong>{date}</strong>
      </p>
      <div className="flex justify-around w-full my-4">
        <button
          className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={onVoteUp}
        >
          👍 {upvotes}
        </button>
        <button
          className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={onVoteDown}
        >
          👎 {downvotes}
        </button>
      </div>
    </div>
  );
}

export default function ArticlesPage() {
  const initialArticles: Article[] = [
    { title: "React Basics", upvotes: 120, downvotes: 0, date: "2024-06-01" },
    { title: "Advanced Hooks", upvotes: 98, downvotes: 0, date: "2024-06-05" },
    { title: "State Management", upvotes: 150, downvotes: 0, date: "2024-06-10" },
  ];

  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [sortKey, setSortKey] = useState<"votes" | "date">("votes");
  const [desc, setDesc] = useState(true);

  const sortArticles = (key: "votes" | "date") => {
    setDesc(prev => (sortKey === key ? !prev : true));
    setSortKey(key);

    setArticles(prev =>
      [...prev].sort((a, b) => {
        if (key === "votes") {
          return desc ? b.upvotes - a.upvotes : a.upvotes - b.upvotes;
        } else {
          return desc
            ? new Date(b.date).getTime() - new Date(a.date).getTime()
            : new Date(a.date).getTime() - new Date(b.date).getTime();
        }
      })
    );
  };

  const handleVoteUp = (i: number) => {
    setArticles(prev =>
      prev.map((a, idx) => (idx === i ? { ...a, upvotes: a.upvotes + 1 } : a))
    );
  };

  const handleVoteDown = (i: number) => {
    setArticles(prev =>
      prev.map((a, idx) => (idx === i ? { ...a, downvotes: a.downvotes + 1 } : a))
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500 mb-12">
        Article Feedback
      </h1>

      {/* Sort Buttons */}
      <div className="flex gap-4 mb-10">
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          onClick={() => sortArticles("votes")}
        >
          Sort by Upvotes {sortKey === "votes" ? (desc ? "⬇️" : "⬆️") : ""}
        </button>
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          onClick={() => sortArticles("date")}
        >
          Sort by Date {sortKey === "date" ? (desc ? "⬇️" : "⬆️") : ""}
        </button>
      </div>

      {/* Article Cards */}
      <div className="flex flex-col item-center gap-4">
        {articles.map((article, i) => (
          <VoteArticleCard
            key={i}
            title={article.title}
            upvotes={article.upvotes}
            downvotes={article.downvotes}
            date={article.date}
            onVoteUp={() => handleVoteUp(i)}
            onVoteDown={() => handleVoteDown(i)}
          />
        ))}
      </div>
    </div>
  );
}
