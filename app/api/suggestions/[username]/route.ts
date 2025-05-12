import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { username: string } }
) {
  const username = context.params.username;

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  // Generate username suggestions based on common patterns
  const suggestions = [
    `${username}dev`,
    `${username}_`,
    `the${username}`,
    `${username}io`,
    `${username}${Math.floor(Math.random() * 100)}`,
    `real${username}`,
  ];

  return NextResponse.json(suggestions);
}
