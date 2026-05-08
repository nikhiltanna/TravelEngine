import { useState } from 'react';

/**
 * Custom hook to simulate Gemini AI itinerary optimization.
 * In a production Google environment, this would call the Vertex AI / Gemini API.
 */
export const useGemini = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastResponse, setLastResponse] = useState(null);

  const refineItinerary = async (tripData) => {
    setIsProcessing(true);
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const optimization = {
      ...tripData,
      notes: `${tripData.notes}\n\n[Gemini AI Optimization]: I've suggested adding a sustainable transport route and identified a hidden local gem near your destination that aligns with your 'Sensory Vibe' profile.`,
      refinedAt: new Date().toISOString()
    };
    
    setLastResponse(optimization);
    setIsProcessing(false);
    return optimization;
  };

  return { refineItinerary, isProcessing, lastResponse };
};
