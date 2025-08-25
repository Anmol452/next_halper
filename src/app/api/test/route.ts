import { NextResponse } from "next/server";


export async function GET() {
    const user = "this is test api";
    const oder = "this is test oder";
    const follow = "this is test follow";


  return NextResponse.json({ message: "Hello from Next.js API!", oder , follow, user}, { status: 200 });
}