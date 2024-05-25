"use client";

import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaThumbsDown, FaTimes } from "react-icons/fa";
import Rating from "./Rating";

const ReviewPage = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommendation, setRecommendation] = useState(null);
  const [selectedTraits, setSelectedTraits] = useState([]);

  const handleSafetyRating = (rating) => {
    setSafetyRating(rating);
  };

  const handleCommunicationRating = (rating) => {
    setCommunicationRating(rating);
  };

  const handleRecommendation = (value) => {
    setRecommendation(value);
  };

  const handleTraitToggle = (trait) => {
    setSelectedTraits((prevTraits) =>
      prevTraits.includes(trait)
        ? prevTraits.filter((t) => t !== trait)
        : [...prevTraits, trait]
    );
  };

  return (
    <div className="relative max-w-sm mx-auto bg-white p-6 rounded-2xl shadow-md mt-2">
      <FaTimes className="  top-2 left-4 text-2xl cursor-pointer  text-gray-500 hover:text-gray-700" />
      <h2 className="text-2xl font-bold text-black mb-4">Leave a review</h2>

      <Rating
        label="Safety"
        description="How safe did you feel with Trausti?"
        rating={safetyRating}
        onRatingChange={handleSafetyRating}
      />

      <Rating
        label="Communication"
        description="How easy was it to communicate with Trausti?"
        rating={communicationRating}
        onRatingChange={handleCommunicationRating}
      />

      <div className="mb-4">
        <label className="block text-lg text-black font-semibold">
          Would you recommend Trausti?
        </label>
        <p className="text-gray-600 text-sm">
          Your opinion won't be shared publicly
        </p>
        <div className="flex items-center">
          <FaThumbsDown
            className={`text-2xl cursor-pointer mr-4 ${
              recommendation === "no" ? "text-red-500" : "text-gray-300"
            }`}
            onClick={() => handleRecommendation("no")}
          />
          <FaThumbsUp
            className={`text-2xl cursor-pointer ${
              recommendation === "yes" ? "text-green-500" : "text-gray-300"
            }`}
            onClick={() => handleRecommendation("yes")}
          />
        </div>
      </div>

      <div>
        <label className="block text-lg text-black font-semibold">Praise</label>
        <p className="text-gray-600">What best describes Trausti?</p>
        <div className="flex flex-wrap">
          {["Adventurous", "Creative", "Good listener"].map((trait) => (
            <span
              key={trait}
              className={`text-sm font-semibold mr-2 mb-2 px-4 py-2 rounded-full cursor-pointer ${
                selectedTraits.includes(trait)
                  ? "bg-blue-500 text-white"
                  : "bg-blue-100 text-blue-800"
              }`}
              onClick={() => handleTraitToggle(trait)}
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
