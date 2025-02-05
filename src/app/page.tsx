/**
 * The main React component for the URL Shortener application.
 * It handles the form submission, API calls to shorten URLs, and displays the shortened URL or any error messages.
 */
"use client"
import ErrorMessage from "@/components/ErrorMessage";
import Header from "@/components/Header";
import ShortenedUrlDisplay from "@/components/ShortenedUrlDisplay";
import UrlShortenerForm from "@/components/UrlShortenerForm";
import axios from "axios";
import { FormEvent, useState } from "react";
import { shortenUrl } from "../services/apiService";

interface ShortenResponse {
  shortenedUrl: string;
}

export default function Home() {
  const [longUrl, setLongUrl] = useState<string>(""); 
  const [shortUrl, setShortUrl] = useState<string>(""); 
  const [error, setError] = useState<string>(""); 
  const [loading, setLoading] = useState<boolean>(false); 

  /**
   * Handles the form submission to shorten a URL.
   * Validates the input URL, makes an API request to shorten it,
   * and updates the UI with the result or any error messages.
   * 
   * @param {FormEvent<HTMLFormElement>} e - The form submission event
   * @returns {Promise<void>} A promise that resolves when the URL shortening process is complete
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    // Reset previous states
    setError("");
    setShortUrl("");

    // Validate input
    if (!longUrl.trim()) {
      setError("Please enter a valid URL.");
      return;
    }

    try {
      setLoading(true);
      const response: ShortenResponse = await shortenUrl(longUrl);
      setShortUrl(response.shortenedUrl);
    } catch (err) {
      // Handle different types of errors
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || "An error occurred while shortening the URL.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (    
  <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Header
        title="URL Shortener"
        description="Transform your long URLs into concise, shareable links."
        subtitle="Simply enter a valid URL starting with http:// or https:// to get started."
      />  
      <UrlShortenerForm
        longUrl={longUrl}
        loading={loading}
        onUrlChange={setLongUrl}
        onSubmit={handleSubmit}
      />
      {shortUrl?.length > 0 && (
          <ShortenedUrlDisplay shortenedUrl={shortUrl} />
      )}
      {error && <ErrorMessage message={error} />}    
    </div>
  );
}
