'use server'

import { headers } from "next/headers";

// interface ApiUrl {
//   apiurl: string;
// }

async function Ssr<T>( apiurl : string): Promise<T> {
  const heads = await headers();
  const host = heads.get("x-forwarded-host") || "localhost:9002";
  const protocol = host.includes("localhost") ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/${apiurl}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blog");

  const data = await res.json();

  return data as T;
}

export default Ssr;
