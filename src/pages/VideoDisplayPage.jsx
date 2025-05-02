import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";

const VideoDisplayPage = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();
  const videoId = new URLSearchParams(search).get("id");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(`/api/video/${videoId}`);
        setVideoUrl(res.data.url);
      } catch (err) {
        alert("Failed to fetch video");
      } finally {
        setLoading(false);
      }
    };
    if (videoId) fetchVideo();
  }, [videoId]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-14 bg-gray-100 flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Your Memory, Reimagined</h2>

        {loading ? (
          <p className="text-gray-600">Loading your AI-generated video...</p>
        ) : videoUrl ? (
          <div className="space-y-4">
            <video controls width="600" className="rounded shadow">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                onClick={() => navigate("/input")}
              >
                Generate Another
              </button>
              <a
                href={videoUrl}
                download="memory-video.mp4"
                className="px-4 py-2 bg-white border border-purple-600 text-purple-600 rounded hover:bg-purple-50"
              >
                Download Video
              </a>
            </div>
          </div>
        ) : (
          <p className="text-red-500">Video not found.</p>
        )}
      </div>
    </>
  );
};

export default VideoDisplayPage;
