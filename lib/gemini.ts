import { GoogleGenAI } from '@google/genai';

export async function generateSummary(text: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey || apiKey === 'your_gemini_api_key') {
    return fallbackSummary(text);
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Summarize the following text concisely in 2-3 sentences:\n\n${text}`
    });
    return response.text || fallbackSummary(text);
  } catch (error) {
    return fallbackSummary(text);
  }
}

function fallbackSummary(text: string): string {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
  
  if (sentences.length === 0) return 'Text is too short to summarize.';
  if (sentences.length <= 2) return sentences.join('. ') + '.';
  
  const summary = sentences.slice(0, 2).join('. ') + '.';
  const wordCount = text.split(/\s+/).length;
  const summaryWordCount = summary.split(/\s+/).length;
  const reduction = Math.round((1 - summaryWordCount / wordCount) * 100);
  
  return `${summary}\n\n📊 Reduced from ${wordCount} to ${summaryWordCount} words (${reduction}% compression)`;
}