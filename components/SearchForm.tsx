"use client";

import { useState, FormEvent } from "react";

interface SearchFormProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

const SearchForm = ({ onSearch, isLoading }: SearchFormProps) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim().length >= 3) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username to check"
          className="flex-1 p-2 border border-gray-300 rounded"
          minLength={3}
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isLoading ? "Checking..." : "Check Availability"}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
