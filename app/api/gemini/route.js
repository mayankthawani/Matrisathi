import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  const { message } = await req.json();

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `तुम एक मददगार और दयालु डिजिटल सहायिका हो जो ग्रामीण क्षेत्रों की गर्भवती महिलाओं की उनकी भाषा में मदद करती हो। कृपया सभी उत्तर सरल हिंदी में दो, छोटे और स्पष्ट हों (2-3 वाक्य में), और देखभाल से भरे हों।

उपयोगकर्ता का सवाल: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json(
      { error: "AI दीदी से जवाब नहीं मिल पाया" },
      { status: 500 }
    );
  }
}

