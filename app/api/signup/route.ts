import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }
  
  const user = await prisma.user.create({
    data: { email, password }
  });
  
  return NextResponse.json({ user });
}