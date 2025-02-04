/**
 * Component that displays a shortened URL with a copy button.
 * When the copy button is clicked, it copies the URL to the clipboard and shows a success message.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {string} props.shortenedUrl - The shortened URL to display
 * 
 * @returns {JSX.Element} A container with the shortened URL and a copy button
 */
import React, { useState } from 'react';

interface ShortenedUrlDisplayProps {
    shortenedUrl: string;
}

const ShortenedUrlDisplay: React.FC<ShortenedUrlDisplayProps> = ({ shortenedUrl }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(shortenedUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };
  
    return (
      <div className="mt-8 p-6">
          <p className="text-gray-800 text-lg font-semibold mb-3">Your shortened URL is ready! 🎉</p>
          <div className="flex items-center space-x-4">
            <a
              href={shortenedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200 break-all flex-1"
            >
              {shortenedUrl}
            </a>
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-md transition-colors duration-200 text-white ${
                copied 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {copied ? 'Copied!' : 'Copy URL'}
            </button>
          </div>
      </div>
    );
};

export default ShortenedUrlDisplay;