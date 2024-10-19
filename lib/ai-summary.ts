import { unstable_cache } from "next/cache";
import { createOpenAI } from '@ai-sdk/openai';
import { generateText} from "ai";
import { Product, Review as ReviewType } from "@/lib/types";

export async function getReviews(formData: {
  productName: string;
  rating: number;
  tone: string;
  wordCount: number;
  keywords: string;
  personalized: boolean;
}) {
  try {
    const response = await fetch('/api/reviews', {
      method: 'POST', // Sending a POST request to send form data
      headers: {
        'Content-Type': 'application/json', // Set the request content type to JSON
      },
      body: JSON.stringify(formData), // Send form data as JSON in the request body
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parsing the response as JSON

    // Log the reviews data and return it
    console.log('Reviews:', data.reviews);
    return data.reviews; // Assuming data.reviews contains the array of reviews
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return 'Error occurred while fetching reviews'; // Return an error message in case of failure
  }
};

