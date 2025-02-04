/**
 * A React component that renders a form for shortening a URL.
 *
 * @param longUrl - The long URL to be shortened.
 * @param loading - A boolean indicating whether the URL shortening is in progress.
 * @param onUrlChange - A function that is called when the URL input value changes.
 * @param onSubmit - A function that is called when the form is submitted.
 * @returns A React element representing the URL shortener form.
 */
import { FormEvent } from 'react'

interface UrlShortenerFormProps {
  longUrl: string
  loading: boolean
  onUrlChange: (url: string) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

const UrlShortenerForm = ({ longUrl, loading, onUrlChange, onSubmit }: UrlShortenerFormProps) => {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-md space-y-6 p-6 bg-white rounded-xl shadow-lg">
        <input
          id="url-input"
          type="url"
          placeholder="https://example.com/your-long-url"
          value={longUrl}
          onChange={(e) => onUrlChange(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-800 placeholder-gray-400"
          required
        />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transform hover:scale-[1.02] transition-all duration-200 font-semibold shadow-sm disabled:hover:scale-100"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Shortening...
          </span>
        ) : (
          "Shorten URL"
        )}
      </button>
    </form>
  )
}

export default UrlShortenerForm