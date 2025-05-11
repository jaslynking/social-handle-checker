import { Platform, CheckResponse } from "@/types";

const API_BASE = "/api";

export async function getPlatforms(): Promise<Platform[]> {
  const response = await fetch(`${API_BASE}/platforms`);
  if (!response.ok) throw new Error("Failed to fetch platforms");
  return response.json();
}

export async function checkUsername(username: string): Promise<CheckResponse> {
  const response = await fetch(`${API_BASE}/check/${username}`);
  if (!response.ok) throw new Error("Failed to check username");
  return response.json();
}

export async function getSuggestions(username: string): Promise<string[]> {
  const response = await fetch(`${API_BASE}/suggestions/${username}`);
  if (!response.ok) throw new Error("Failed to get suggestions");
  return response.json();
}
