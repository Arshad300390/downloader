"use client";
import React from "react";
import VoteCard from "../../components/VoteCard";

function Page() {
    const initialVotes = [
        { title: "Readability", upvotes: 0, downvotes: 0 },
        { title: "Performance", upvotes: 0, downvotes: 0 },
        { title: "Security", upvotes: 0, downvotes: 0 },
        { title: "Documentation", upvotes: 0, downvotes: 0 },
        { title: "Testing", upvotes: 0, downvotes: 0 },
    ];
    const [votes, setVotes] = React.useState(initialVotes);
    const handleVoteUp = (i : number) => {
        setVotes( previousVotes => 
            previousVotes.map((v, index) =>
                index === i ? { ...v, upvotes: v.upvotes + 1 } : v
        )
    );
    }

    const handleVoteDown = (i : number) => {
        setVotes( previousVotes => 
            previousVotes.map((v, index) =>
                index === i ? { ...v, downvotes: v.downvotes + 1 } : v
        )
    );
    }

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500 mb-12">
        Code Review Feedback
      </h1>
      <div className="w-full max-w-6xl mx-auto">
       <div className="flex flex-wrap justify-center gap-8">
         
        {
            votes.map((v, i) =>
                <VoteCard
                    key={i}
                    title={v.title}
                    upvotes={v.upvotes}
                    downvotes={v.downvotes}
                    onVoteUp={() => {handleVoteUp(i)}}
                    onVoteDown={() => {handleVoteDown(i)}}
                />
            )
        }
        </div>
      </div>
    </div>
  );
}

export default Page;
