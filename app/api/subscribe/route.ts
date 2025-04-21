/**
 * Ensure the dynamic export is properly formatted and placed at the very top of the file
 */
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

if (!GOOGLE_SCRIPT_URL) {
  console.error('Missing GOOGLE_SCRIPT_URL environment variable');
}

export async function POST(req: Request) {
  try {
    const { email: Email } = await req.json();

    if (!Email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    // Create form data instead of JSON
    const formData = new URLSearchParams();
    formData.append('Email', Email);
    formData.append('Timestamp', timestamp);

    const response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to save to Google Sheets');
    }

    return NextResponse.json(
      { message: 'Successfully subscribed' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}