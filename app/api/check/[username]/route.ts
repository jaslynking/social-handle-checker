import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { platforms } from "@/data/platforms";
import { CheckResult } from "@/types";

// Helper function to check if username exists on a platform
async function checkUsername(
  platform: (typeof platforms)[0],
  username: string
): Promise<CheckResult> {
  try {
    const response = await axios.head(`${platform.url}${username}`, {
      validateStatus: function (status) {
        return status < 500; // Accept any status code less than 500
      },
      timeout: 5000, // 5 second timeout
    });

    // Different platforms may have different responses for available usernames
    // GitHub returns 404 when username is available
    if (
      platform.id === "github" ||
      platform.id === "reddit" ||
      platform.id === "devto"
    ) {
      return {
        platform: platform.id,
        name: platform.name,
        available: response.status === 404,
        url: `${platform.url}${username}`,
      };
    }

    // For other platforms, this is a simple check
    return {
      platform: platform.id,
      name: platform.name,
      available: response.status !== 200,
      url: `${platform.url}${username}`,
    };
  } catch (error) {
    console.error("Error checking username:", error);
    // If request fails or times out
    return {
      platform: platform.id,
      name: platform.name,
      available: true, // Assume available if there's an error
      error: true,
      url: `${platform.url}${username}`,
    };
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Record<string, string> }
) {
  const username = params.username;

  if (!username || username.length < 3) {
    return NextResponse.json(
      { error: "Username must be at least 3 characters long" },
      { status: 400 }
    );
  }

  try {
    // Check all platforms in parallel
    const checkPromises = platforms.map((platform) =>
      checkUsername(platform, username)
    );

    const results = await Promise.all(checkPromises);

    return NextResponse.json({
      username,
      results,
    });
  } catch (error) {
    console.error("Failed to check username availability:", error);
    return NextResponse.json(
      { error: "Failed to check username availability" },
      { status: 500 }
    );
  }
}
