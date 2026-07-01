import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { generateSummary } from "@/lib/gemini";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { text } = await request.json();
  if (!text) return NextResponse.json({ error: "Text required" }, { status: 400 });

  const summary = await generateSummary(text);
  let usageCount = 0;

  const session = await getServerSession();
  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (user) {
      const month = new Date().toISOString().slice(0, 7);

      await prisma.usage.upsert({
        where: { userId_month: { userId: user.id, month } },
        update: { count: { increment: 1 } },
        create: { userId: user.id, month, count: 1 }
      });

      const usage = await prisma.usage.findUnique({
        where: { userId_month: { userId: user.id, month } }
      });

      usageCount = usage?.count || 0;
    }
  }

  return NextResponse.json({ summary, usage: usageCount });
}