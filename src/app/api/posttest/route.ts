import { NextResponse } from "next/server";


export async function post() {
    const data = "this is test api for post method";

  return NextResponse.json({ message: "Hello from Next.js API!", data }, { status: 200 });
}