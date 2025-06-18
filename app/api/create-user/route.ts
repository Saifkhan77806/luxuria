import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { email, username, profileUrl } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
    }

    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ success: false, message: 'User already exists' });
    }

    await db.user.create({
      data: {
        email,
        username,
        profilePicture: profileUrl,
      },
    });

    return NextResponse.json({ success: true, message: 'User created' });

  } catch (error: unknown) {
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Server Error',
    }, { status: 500 });
  }
}
