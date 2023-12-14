import { NextRequest } from "next/server";
import { OpenAIStream, OpenAIStreamPayload } from "../../../utils/OpenAIStream";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { prompt, userProvidedAPIKey } = (await req.json()) as {
    prompt?: string;
    userProvidedAPIKey?: string;
  };

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  if (!userProvidedAPIKey) {
    return new Response("No API Key in the request", { status: 400 });
  }

  const apiKey =
    userProvidedAPIKey === process.env.API_KEY_ALTERNATIVE
      ? process.env.OPEN_AI_API_KEY
      : userProvidedAPIKey;

  const payload: OpenAIStreamPayload = {
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 3000,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload, apiKey!);
  // return stream response (SSE)
  return new Response(stream, {
    headers: new Headers({
      "Cache-Control": "no-cache",
    }),
  });
}
