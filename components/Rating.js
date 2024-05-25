import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ label, description, rating, onRatingChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg text-black font-semibold">{label}</label>
      <p className="text-gray-600">{description}</p>
      <div className="flex">
        {Array(5)
          .fill()
          .map((_, i) => (
            <FaStar
              key={i}
              className={`text-2xl cursor-pointer ${
                i < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => onRatingChange(i + 1)}
            />
          ))}
      </div>
    </div>
  );
};

export default Rating;
