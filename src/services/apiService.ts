import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const shortenUrl = async (originalURL: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/shorten`,
      { originalURL },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data; // Return the data directly
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Something went wrong.");
    }
    throw new Error("Something went wrong.");
  }
};
