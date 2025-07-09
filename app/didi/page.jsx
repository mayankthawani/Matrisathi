"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mic, Send, Volume2, VolumeX, Heart, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";

export default function DidiPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Clean up any existing speech synthesis on component mount
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    
    return () => {
      // Clean up speech synthesis on unmount
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    if (!message.trim()) return;
    setIsLoading(true);
    
    // Stop any ongoing speech
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (data.reply) {
        setResponse(data.reply);
        // Removed automatic speech - only speak when button is clicked
      } else {
        setResponse("AI दीदी से जवाब नहीं मिल पाया।");
      }
    } catch (err) {
      setResponse("AI दीदी से जवाब नहीं मिल पाया।");
    }
    setIsLoading(false);
    setMessage(""); // Clear input after sending
  };

  const toggleSpeech = (text) => {
    if (!isMounted || typeof window === 'undefined' || !window.speechSynthesis) {
      return;
    }

    if (isSpeaking) {
      // Stop speaking
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Start speaking
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "hi-IN";
      utterance.rate = 0.8;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if (!isMounted || typeof window === 'undefined') {
      return;
    }

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('आपका ब्राउज़र वॉयस फीचर को सपोर्ट नहीं करता');
      return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "hi-IN";
    recognition.interimResults = false;
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
    };
    recognition.onerror = (event) => {
      setIsListening(false);
      console.error("Voice Error:", event.error);
    };
    recognition.start();
  };

  const commonQuestions = [
    "गर्भावस्था में क्या खाना चाहिए?",
    "प्रसव के लक्षण क्या हैं?",
    "बच्चे की देखभाल कैसे करें?",
    "कौन से टीके जरूरी हैं?"
  ];

  // Don't render until mounted to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF4F4] via-[#FFF8F8] to-[#F8F4FF] w-full max-w-sm mx-auto md:max-w-4xl lg:max-w-6xl">
      <Navbar />

      <div className="pt-6 pb-32 px-4 md:px-12 lg:px-20 md:pt-12 md:pb-40">
        {/* Back Button */}
        <button
          className="flex items-center text-base text-[#9E79B9] mb-6 font-mukta font-semibold hover:scale-105 transition-transform md:text-lg"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-5 h-5 mr-2 md:w-6 md:h-6" />
          वापस जाएं
        </button>

        {/* Enhanced Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center md:w-20 md:h-20">
              <span className="text-2xl md:text-3xl">👩‍⚕️</span>
            </div>
            <Sparkles className="text-[#9E79B9] animate-pulse" size={20} />
          </div>
          
          <h1 className="text-xl font-bold text-[#9E79B9] mb-3 font-mukta leading-tight md:text-3xl lg:text-4xl">
            AI दीदी से पूछें
          </h1>
          
          <p className="text-gray-600 text-sm font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            आपके सवालों का जवाब देने के लिए यहाँ हूँ। कुछ भी पूछ सकती हैं!
          </p>
        </div>

        {/* Input Section */}
        <div className="mb-6 max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-md shadow-lg border-2 border-purple-100 rounded-xl">
            <CardContent className="p-4">
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={message}
                  onChange={handleInputChange}
                  placeholder="यहाँ टाइप करें या बोलें..."
                  className="flex-1 p-3 border-2 border-purple-100 rounded-lg shadow-sm font-noto text-sm focus:border-[#9E79B9] focus:outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !message.trim()}
                  className="flex-1 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] text-white px-4 py-3 rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-mukta font-semibold"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      पूछ रहे हैं...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send size={16} />
                      पूछें
                    </div>
                  )}
                </button>
                
                <button
                  onClick={startListening}
                  disabled={isListening}
                  className={`bg-gradient-to-r from-pink-400 to-rose-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 ${
                    isListening ? "animate-pulse" : ""
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Mic size={16} />
                    <span className="text-xs font-mukta">
                      {isListening ? "सुन रहे..." : "बोलें"}
                    </span>
                  </div>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Common Questions */}
        <div className="mb-6 max-w-4xl mx-auto">
          <h3 className="text-base font-bold text-[#9E79B9] mb-3 font-mukta text-center">
            आम सवाल
          </h3>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {commonQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setMessage(question)}
                className="bg-white/70 border-2 border-purple-100 rounded-lg p-3 text-xs font-noto text-left hover:bg-purple-50 hover:border-[#9E79B9] transition-all duration-300"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Response Section */}
        {response && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-lg">👩‍⚕️</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-gray-800 font-mukta">AI दीदी का जवाब:</h4>
                  </div>
                  {isMounted && typeof window !== 'undefined' && window.speechSynthesis && (
                    <button
                      onClick={() => toggleSpeech(response)}
                      className={`${
                        isSpeaking 
                          ? 'bg-red-500 hover:bg-red-600' 
                          : 'bg-blue-500 hover:bg-blue-600'
                      } text-white p-2 rounded-full transition-colors flex items-center gap-1`}
                      title={isSpeaking ? 'आवाज़ बंद करें' : 'आवाज़ में सुनें'}
                    >
                      {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      <span className="text-xs font-mukta hidden sm:inline">
                        {isSpeaking ? 'बंद करें' : 'सुनें'}
                      </span>
                    </button>
                  )}
                </div>
                <div className="bg-white/80 rounded-lg p-3">
                  <p className="text-gray-800 text-sm leading-relaxed font-noto whitespace-pre-wrap">
                    {response}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Welcome Message */}
        {!response && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-base text-gray-800 font-mukta mb-3">
                  नमस्ते! मैं आपकी AI दीदी हूँ
                </h3>
                <p className="text-gray-600 text-xs font-noto leading-relaxed">
                  गर्भावस्था, प्रसव, बच्चे की देखभाल या स्वास्थ्य से जुड़े किसी भी सवाल का जवाब पाने के लिए मुझसे पूछें। मैं यहाँ आपकी मदद के लिए हूँ!
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-lg">🤱</span>
                  <span className="text-lg">💕</span>
                  <span className="text-lg">👶</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <Downbar />
    </div>
  );
}
