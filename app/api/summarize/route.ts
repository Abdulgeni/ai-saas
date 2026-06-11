import { NextResponse } from 'next/server';
import { generateSummary } from '@/lib/gemini';

export async function POST(request: Request) {
  const { text } = await request.json();
  
  if (!text) {
    return NextResponse.json({ error: 'Text is required' }, { status: 400 });
  }
  
  const summary = await generateSummary(text);
  
  return NextResponse.json({ summary });
}