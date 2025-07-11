import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or SECRET is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

//Upsert meaning--> if create or update whatever the case

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream User:", error);
  }
};

export const generateStreamToken = async () => {};
