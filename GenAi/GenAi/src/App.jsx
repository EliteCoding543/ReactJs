import React, { useRef, useState } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_API_KEY,
});

const App = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  const handleSubmit = async () => {
    const prompt = inputRef.current.value.trim();

    if (!prompt) return;

     // Input clear
     inputRef.current.value = "";

    setLoading(true);
    setResponse("");

    try {
      const result = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: prompt,
      });

      setResponse(result.text);
    } catch (error) {
      console.error(error);
      setResponse("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          Gemini AI Chat
        </h1>

        <input
          ref={inputRef}
          rows={5}
          placeholder="Ask anything..."
          className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"
        />

        <div className="flex justify-end m-2">
            <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-bold"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
        </div>

        {response && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg whitespace-pre-wrap">
            <p>{response}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;