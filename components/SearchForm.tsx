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
          className="flex-1 border-gray-300 block w-full rounded-md border p-3 text-base placeholder-gray-500 shadow-sm focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 sm:flex-1"
          minLength={3}
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isLoading ? "Checking..." : "Check Availability"}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
