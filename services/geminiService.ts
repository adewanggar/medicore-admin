
import { GoogleGenAI } from "@google/genai";
import { Patient } from "../types";

// Always use the process.env.API_KEY directly in the constructor
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePatientSummary = async (patient: Patient): Promise<string> => {
  try {
    const prompt = `
      You are a medical administrative assistant. Analyze the following patient data:
      Name: ${patient.name}
      Age: ${patient.age}
      Diagnosis: ${patient.diagnosis}
      Recent Notes: ${patient.notes}
      
      Please provide a concise, professional summary (max 3 sentences) suitable for a doctor's quick review. 
      Focus on key concerns and next steps. Use a professional tone in Indonesian.
    `;

    // Updated to use gemini-3-flash-preview for summarization task
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    // Directly access text property
    return response.text || "No summary available.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to generate summary. Please try again later.";
  }
};

export const generateHealthTip = async (): Promise<string> => {
    try {
        // Updated to use gemini-3-flash-preview for basic text tasks
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: "Provide one short, modern, evidence-based health tip for a clinic daily dashboard. Keep it under 20 words.",
        });
        // Directly access text property
        return response.text || "Health is wealth.";
    } catch (e) {
        return "Eat more vegetables.";
    }
}
