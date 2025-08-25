import { NextResponse } from "next/server";


export async function GET() {
    const title = "this is test api";
    const desc = "this is test oder";
    const follow = "this is test follow";


  return NextResponse.json({ message: "Hello from Next.js API!", title , follow, desc}, { status: 200 });
}