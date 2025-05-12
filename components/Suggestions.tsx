"use client";

interface SuggestionsProps {
  suggestions: string[];
  onSelectSuggestion: (suggestion: string) => void;
}

const Suggestions = ({ suggestions, onSelectSuggestion }: SuggestionsProps) => {
  if (!suggestions || suggestions.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Try these alternatives:</h2>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSelectSuggestion(suggestion)}
            className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm dark:text-gray-600"
          >
            @{suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
