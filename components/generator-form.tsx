import React, { useState } from 'react';
import { Product, Review as ReviewType } from "@/lib/types";
import { getReviews } from "@/lib/ai-summary";
import { getProduct } from "@/lib/sample-data";

export default function GeneratorForm({ onNewReviews }: { onNewReviews: (reviews: ReviewType[]) => void }) {
  const [productName, setProductName] = useState('');
  const [rating, setRating] = useState(3);
  const [tone, setTone] = useState('Neutral');
  const [wordCount, setWordCount] = useState(100);
  const [keywords, setKeywords] = useState('');
  const [personalized, setPersonalized] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to track loading

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true); // Start loading when form is submitted

    const formData = {
      productName,
      rating,
      tone,
      wordCount,
      keywords,
      personalized,
    };

    const newReviews = await getReviews(formData); // Call the function to get reviews with form data
    onNewReviews(newReviews); // Update reviews in parent component

    setIsLoading(false); // Stop loading when reviews are generated
  };

  return (
    <div className="w-full relative">
      {/* Overlay Loader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="text-white text-lg font-semibold">
            Generating reviews...
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form Inputs as before */}
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center">
            <div className="w-1/2 mr-4">
              <label htmlFor="productName" className="block text-sm font-medium text-gray-400">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="mt-1 block w-full h-12 px-3 text-gray-800 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter product name"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="tone" className="block text-sm font-medium text-gray-400">
                Tone of Review
              </label>
              <select
                id="tone"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="mt-1 block h-12 px-3 text-gray-800 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option>Enthusiastic</option>
                <option>Neutral</option>
                <option>Critical</option>
                <option>Humorous</option>
                <option>In-depth</option>
              </select>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/2 mr-4">
              <label htmlFor="rating" className="block text-sm font-medium text-gray-400">
                Review Rating: {rating}
              </label>
              <input
                type="range"
                id="rating"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="mt-1 block w-full"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="wordCount" className="block text-sm font-medium text-gray-400">
                Word Count: {wordCount}
              </label>
              <input
                type="range"
                id="wordCount"
                min="50"
                max="200"
                value={wordCount}
                onChange={(e) => setWordCount(Number(e.target.value))}
                className="mt-1 block w-full"
              />
            </div>
          </div>
          <div>
            <label htmlFor="keywords" className="block text-sm font-medium text-gray-400">
              Keywords
            </label>
            <input
              type="text"
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="mt-1 block w-full h-12 px-3 text-gray-800 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter keywords separated by commas"
            />
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="personalized"
            checked={personalized}
            onChange={(e) => setPersonalized(e.target.checked)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="personalized" className="ml-2 block text-sm text-gray-100">
            Personalize the review
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-3 text-gray-100 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate Reviews
        </button>
      </form>
    </div>
  );
}
