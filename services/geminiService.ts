
import { GoogleGenAI } from "@google/genai";
import { Patient } from "../types";

// Initialize AI lazily to avoid crashing on load if API key is missing
let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error("Gemini API Key is not set in environment variables.");
    }
    if (!aiInstance) {
        aiInstance = new GoogleGenAI({ apiKey });
    }
    return aiInstance;
};

export const generatePatientSummary = async (patient: Patient): Promise<string> => {
  try {
    const ai = getAI();
    const prompt = `
      You are a medical administrative assistant. Analyze the following patient data:
      Name: ${patient.name}
      Age: ${patient.age}
      Diagnosis: ${patient.diagnosis}
      Recent Notes: ${patient.notes}
      
      Please provide a concise, professional summary (max 3 sentences) suitable for a doctor's quick review. 
      Focus on key concerns and next steps. Use a professional tone in Indonesian.
    `;

    // Supporting the specific SDK version in package.json
    const response = await (ai as any).models.generateContent({
      model: 'gemini-1.5-flash',
      contents: prompt,
    });

    return response.text || "No summary available.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to generate summary. Please set your GEMINI_API_KEY in Vercel.";
  }
};

export const generateHealthTip = async (): Promise<string> => {
    try {
        const ai = getAI();
        const response = await (ai as any).models.generateContent({
            model: 'gemini-1.5-flash',
            contents: "Provide one short, modern, evidence-based health tip for a clinic daily dashboard. Keep it under 20 words.",
        });
        return response.text || "Health is wealth.";
    } catch (e) {
        console.error("Health Tip Error:", e);
        return "Eat more vegetables.";
    }
}
