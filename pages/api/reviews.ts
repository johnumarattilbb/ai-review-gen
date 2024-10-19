import { NextApiRequest, NextApiResponse } from 'next';
import Groq from 'groq-sdk';

// Serverless function to get reviews
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Initialize the Groq API client with your API key
  const groq = new Groq({
    apiKey: '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'
  });

  try {
    const formData = req.body;

    // Log the received form data
    console.log("Form Data:", formData);

    const { productName, rating, tone, wordCount, keywords, personalized } = formData;

    // Construct a prompt using formData values
    const prompt = `
    Generate 10 product reviews for "${productName}".
    The tone of the reviews should be "${tone}".
    Include the following keywords: "${keywords}".
    Each review should be around ${wordCount} words.
    The average rating for the product is ${rating} stars.
    Please provide personalized author names, dates (within 2024), and vary the star ratings accordingly.
  `;

    // Use Groq API to get chat completion with the constructed prompt
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Generate a and return only JSON array with 10 product reviews. Each review must be in this exact format: { review: '', authorName: '', date: '', stars: }. Only return the JSON array, no additional text."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama3-70b-8192" // Specifying the model to use
    });

    // Resolve the Promise with the content of the chat completion
    const responseContent = chatCompletion.choices[0]?.message?.content || "";

    // Respond with generated reviews
    res.status(200).json({
      reviews: JSON.parse(responseContent) // Assuming the API returns reviews in JSON format
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate reviews' });
  }
}
