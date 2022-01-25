import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { Visit } from "./src/Visit.ts";

interface VisitPost {
  host: string,
  path: string,
  useragent: string,
  timestamp: number
}

console.log("Listening on http://localhost:9099");
serve(handler, { addr: ":9099" });

async function handler(request: Request): Promise<Response> {
  if (request.method == "POST") {
    const data: VisitPost = await request.json()

    const visit = new Visit(data.timestamp, data.host, data.path, data.useragent);

    console.log(visit);

    return new Response("POST");
  } else {
    return new Response("Request method must be POST", {
      status: 418
    });
  }
}