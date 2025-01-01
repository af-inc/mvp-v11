import React from "react";
import { SquareUser, Bitcoin, Heart } from "lucide-react"; 

export const Purpose = ({ formData, updateFormData }) => {
  const purposes = [
    {
      value: "yourself",
      label: "For yourself",
      icon: <SquareUser className="w-6 h-6 text-indigo-600" />,
    },
    {
      value: "someone_else",
      label: "For someone else",
      icon: <Heart className="w-6 h-6 text-indigo-600" />,
    },
    {
      value: "crypto",
      label: "For crypto based cause.",
      icon: <Bitcoin className="w-6 h-6 text-indigo-600" />,
    },
  ];

  return (
    <div className="space-y-4 w-screen">
    <h2 className="text-xl font-bold text-indigo-900">Which is your purpose of raising funds?</h2>
      <div className="space-y-3">
        {purposes.map((purpose) => (
          <label
            key={purpose.value}
            className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all ${
              formData.purpose === purpose.value
                ? "bg-indigo-100 border-indigo-200"
                : "bg-white border-gray-300"
            } hover:border-indigo-500`}
          >
            <input
              type="radio"
              id={purpose.value}
              name="purpose"
              value={purpose.value}
              checked={formData.purpose === purpose.value}
              onChange={() => updateFormData("purpose", purpose.value)}
              className="hidden"
            />
            {purpose.icon}
            <div className="text-gray-700">
              <p className="font-medium">{purpose.label.split(":")[0]}</p>
              <p className="text-sm">{purpose.label.split(":")[1]}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};
