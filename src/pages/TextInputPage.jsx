import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";

const TextInputPage = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!text.trim()) return alert("Please enter a memory description.");

    setLoading(true);
    try {
      const res = await axios.post("/api/generate-video", { text });
      const videoId = res.data.videoId;
      navigate(`/video?id=${videoId}`);
    } catch (err) {
      alert("Failed to generate video");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 pt-14 flex items-center justify-center px-4">
        <div className="max-w-xl w-full bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Describe Your Memory</h2>
          <form onSubmit={handleGenerate} className="space-y-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a short memory you'd like to animate (max 300 characters)..."
              rows={5}
              maxLength={300}
              className="w-full px-4 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <div className="text-sm text-right text-gray-500">{text.length}/300</div>
            <button
              type="submit"
              className={`w-full py-2 text-white font-semibold rounded transition ${
                loading ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
              }`}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Video"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TextInputPage;
