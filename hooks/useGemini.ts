import { useState } from 'react';
import axios from 'axios';

export const useGemini = () => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askGemini = async (input: string) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `AIzaSyAbs1vgjBl4bORFWaQNlPYeFn7OJ2pqqZw`,
        {
          contents: [
            {
              parts: [{ text: input }]
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const reply = res.data.candidates?.[0]?.content?.parts?.[0]?.text;
      setResponse(reply || 'No response from Gemini');
    } catch (error) {
      console.error('Gemini API error:', error);
      setResponse('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, askGemini };
};
