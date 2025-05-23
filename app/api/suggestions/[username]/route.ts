import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  const { username } = params;

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
