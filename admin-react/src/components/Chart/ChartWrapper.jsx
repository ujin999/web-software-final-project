import React from "react";

export default function ChartWrapper({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-md border p-4 mb-4">
      <h6 className="text-lg font-semibold text-gray-700 mb-3">{title}</h6>
      {children}
    </div>
  );
}