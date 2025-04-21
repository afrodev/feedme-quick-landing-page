import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

if (!GOOGLE_SCRIPT_URL) {
  console.error('Missing GOOGLE_SCRIPT_URL environment variable');
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    const response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        timestamp,
      }),
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