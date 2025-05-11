"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import ResultsList from "../components/ResultsList";
import Suggestions from "../components/Suggestions";
import { getPlatforms, checkUsername, getSuggestions } from "../lib/api";
import { Platform, CheckResponse } from "../types";

export default function Home() {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [results, setResults] = useState<CheckResponse | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load platforms when component mounts
    const loadPlatforms = async () => {
      try {
        const data = await getPlatforms();
        setPlatforms(data);
      } catch (err) {
        setError("Failed to load platforms");
        console.error(err);
      }
    };

    loadPlatforms();
  }, []);

  const handleSearch = async (username: string) => {
    setIsLoading(true);
    setError(null);
    setResults(null);
    setSuggestions([]);

    try {
      // Check username availability
      const data = await checkUsername(username);
      setResults(data);

      // If some platforms show username as taken, get suggestions
      if (data.results.some((result) => !result.available)) {
        const suggestionsData = await getSuggestions(username);
        setSuggestions(suggestionsData);
      }
    } catch (err) {
      setError("An error occurred while checking the username");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {results && <ResultsList results={results} />}

        {suggestions.length > 0 && (
          <Suggestions
            suggestions={suggestions}
            onSelectSuggestion={handleSearch}
          />
        )}

        {platforms.length > 0 && !results && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Supported Platforms</h2>
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <span
                  key={platform.id}
                  className="bg-gray-200 px-3 py-1 rounded text-sm"
                >
                  {platform.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
