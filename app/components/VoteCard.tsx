import React from 'react'

function VoteCard({title, upvotes, downvotes, onVoteUp, onVoteDown}: {title: string, upvotes: number, downvotes: number, onVoteUp: () => void, onVoteDown: () => void}) {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg p-6 mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div className="flex justify-around mb-6">
        <button
          className="py-2 px-4 bg-green-100 text-green-700 rounded-lg font-semibold hover:bg-green-200 transition"
          data-testid="upvote-btn-0"
          onClick={onVoteUp}
        >
          👍 Upvote
        </button>
        <button
          className="py-2 px-4 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition"
          data-testid="downvote-btn-0"
          onClick={onVoteDown}
        >
          👎 Downvote
        </button>
      </div>
      <p className="mb-2 text-center" data-testid="upvote-count-0">
        Upvotes: <strong>{upvotes}</strong>
      </p>
      <p className="mb-2 text-center" data-testid="downvote-count-0">
        Downvotes: <strong>{downvotes}</strong>
      </p>
    </div>
  )
}

export default VoteCard