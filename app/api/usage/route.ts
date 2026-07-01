import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    return NextResponse.json({ count: 0 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  });

  if (!user) return NextResponse.json({ count: 0 });

  const month = new Date().toISOString().slice(0, 7);
  const usage = await prisma.usage.findUnique({
    where: { userId_month: { userId: user.id, month } }
  });

  return NextResponse.json({ count: usage?.count || 0 });
}