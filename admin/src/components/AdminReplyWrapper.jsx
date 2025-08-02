import React, { useState, useEffect } from "react";

const AdminReply = () => {
  const [reviews, setReviews] = useState([]);
  const [adminReplies, setAdminReplies] = useState({});

  useEffect(() => {
    // Simulated API call for fetching reviews
    const fetchReviews = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/reviews");
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  const handleReplyChange = (index, value) => {
    setAdminReplies({ ...adminReplies, [index]: value });
  };

  const handleReplySubmit = async (index) => {
    const updated = [...reviews];
    updated[index].reply = adminReplies[index] || "";
    setReviews(updated);

    try {
      await fetch(`http://localhost:4000/api/reviews/${updated[index]._id}/reply`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reply: updated[index].reply }),
      });
    } catch (err) {
      console.error("Failed to save reply:", err);
    }

    setAdminReplies({ ...adminReplies, [index]: "" });
  };

  if (!Array.isArray(reviews)) {
    return <div className="p-6 text-red-600 text-center">⚠️ No reviews available.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Admin Replies</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-500">No user reviews yet.</p>
      ) : (
        reviews.map((rev, idx) => (
          <div key={rev._id} className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
            <div className="mb-2">
              <p className="font-semibold text-gray-800">{rev.name}</p>
              <p className="text-sm text-gray-600">{rev.comment}</p>
            </div>

            <div className="mb-2 text-yellow-500 text-sm">
              {"★".repeat(rev.rating)}
              <span className="text-gray-400">{"☆".repeat(5 - rev.rating)}</span>
            </div>

            {rev.reply ? (
              <div className="bg-green-100 p-3 rounded text-sm text-green-800 border-l-4 border-green-600">
                <strong>Admin Reply:</strong> {rev.reply}
              </div>
            ) : (
              <div>
                <textarea
                  rows="2"
                  placeholder="Write a reply..."
                  className="w-full border rounded px-3 py-2 text-sm mt-2"
                  value={adminReplies[idx] || ""}
                  onChange={(e) => handleReplyChange(idx, e.target.value)}
                />
                <button
                  onClick={() => handleReplySubmit(idx)}
                  className="mt-2 bg-green-600 text-white text-sm px-4 py-1 rounded hover:bg-green-700 transition"
                >
                  Submit Reply
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AdminReply;
