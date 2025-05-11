"use client";

import { CheckResponse } from "@/types";

interface ResultsListProps {
  results: CheckResponse | null;
}

const ResultsList = ({ results }: ResultsListProps) => {
  if (!results) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">
        Results for <span className="text-indigo-500">@{results.username}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.results.map((result) => (
          <div
            key={result.platform}
            className={`p-4 rounded border ${
              result.available
                ? "border-green-500 bg-green-50"
                : "border-red-500 bg-red-50"
            }`}
          >
            <div className="font-medium">{result.name}</div>
            <div className="text-sm mb-2">
              {result.available ? "Available! 🎉" : "Already taken ❌"}
              {result.error && " (Error checking)"}
            </div>
            <a
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-sm hover:underline"
            >
              View {result.name} Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsList;
