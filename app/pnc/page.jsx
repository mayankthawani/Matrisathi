"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Baby, Shield, Sparkles, AlertCircle, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";

export default function PNCPage() {
  const router = useRouter();

  const careCards = [
    {
      id: "mother-care",
      title: "माँ की देखभाल",
      emoji: "👩‍⚕️",
      icon: Heart,
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      items: [
        { text: "डिलीवरी के बाद दो बार स्वास्थ्य जांच करवाएं: 3 दिन के अंदर और फिर 7-14 दिनों के बीच", emoji: "🩺" },
        { text: "संक्रमण से बचाव के लिए स्वच्छता बनाए रखें", emoji: "🧼" },
        { text: "पौष्टिक भोजन करें और अधिक पानी पिएं", emoji: "🥗" },
        { text: "पर्याप्त आराम करें और थकावट से बचें", emoji: "😴" },
        { text: "बच्चे को समय पर स्तनपान कराएं", emoji: "🤱" },
        { text: "तनाव महसूस हो तो परिवार या आंगनवाड़ी कार्यकर्ता से बात करें", emoji: "💬" }
      ]
    },
    {
      id: "baby-care",
      title: "नवजात शिशु की देखभाल",
      emoji: "👶",
      icon: Baby,
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      items: [
        { text: "जन्म के एक घंटे के भीतर स्तनपान शुरू करें और 6 महीने तक केवल माँ का दूध दें", emoji: "🍼" },
        { text: "BCG, OPV और हेपेटाइटिस-B जैसे टीके समय पर लगवाएं", emoji: "💉" },
        { text: "नियमित रूप से बच्चे का वज़न और तापमान जाँचें", emoji: "⚖️" },
        { text: "बच्चे को हल्के गर्म पानी से साफ करें", emoji: "🛁" },
        { text: "बच्चे में असामान्य लक्षण दिखें तो तुरंत डॉक्टर से संपर्क करें", emoji: "🚨" }
      ]
    },
    {
      id: "important-tips",
      title: "महत्वपूर्ण सुझाव",
      emoji: "💡",
      icon: Shield,
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      items: [
        { text: "पहले 42 दिन माँ और बच्चे के लिए संवेदनशील होते हैं", emoji: "📅" },
        { text: "सरकारी योजनाओं (JSY, JSSK) का लाभ लें", emoji: "🏛️" },
        { text: "समस्या होने पर निकटतम स्वास्थ्य केंद्र से तुरंत संपर्क करें", emoji: "🏥" }
      ]
    }
  ];

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
              <span className="text-2xl md:text-3xl">👶</span>
            </div>
            <Sparkles className="text-[#9E79B9] animate-pulse" size={20} />
          </div>
          
          <h1 className="text-xl font-bold text-[#9E79B9] mb-3 font-mukta leading-tight md:text-3xl lg:text-4xl">
            प्रसवोत्तर देखभाल<br />
            <span className="text-base md:text-xl lg:text-2xl text-gray-600">(PNC)</span>
          </h1>
          
          <p className="text-gray-600 text-sm font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            माँ और नवजात शिशु की सुरक्षा और स्वास्थ्य के लिए आवश्यक जानकारी
          </p>
        </div>

        {/* Interactive Care Cards */}
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          {careCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card
                key={card.id}
                className={`bg-gradient-to-r ${card.bgGradient} ${card.borderColor} border-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden md:rounded-3xl`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-4 relative md:p-8">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -translate-y-8 translate-x-8 md:w-24 md:h-24"></div>
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg flex-shrink-0 md:w-14 md:h-14`}>
                      <span className="text-xl md:text-2xl">{card.emoji}</span>
                    </div>
                    <h2 className="font-bold text-base text-gray-800 font-mukta group-hover:text-[#9E79B9] transition-colors md:text-xl leading-tight flex-1">
                      {card.title}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    {card.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors cursor-pointer group/item"
                      >
                        <span className="text-base flex-shrink-0 group-hover/item:scale-125 transition-transform">
                          {item.emoji}
                        </span>
                        <p className="text-gray-700 font-noto text-xs leading-relaxed md:text-base">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Alert */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 border-2 rounded-xl shadow-lg md:rounded-3xl">
            <CardContent className="p-4 md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 md:w-12 md:h-12">
                  <AlertCircle className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-800 font-mukta mb-2 md:text-lg">
                    आपातकालीन संकेत
                  </h3>
                  <div className="space-y-2">
                    { [
                      { text: "तेज़ बुखार या ठंड लगना", emoji: "🤒" },
                      { text: "अत्यधिक रक्तस्राव", emoji: "🩸" },
                      { text: "सांस लेने में तकलीफ", emoji: "😮‍💨" },
                      { text: "बच्चे का दूध न पीना या सुस्ती", emoji: "😴" }
                    ].map((symptom, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs md:text-sm">
                        <span>{symptom.emoji}</span>
                        <span className="text-gray-700 font-noto">{symptom.text}</span>
                      </div>
                    )) }
                  </div>
                  <p className="text-red-600 font-semibold text-xs mt-3 font-mukta md:text-sm">
                    इनमें से कोई भी लक्षण दिखे तो तुरंत डॉक्टर से संपर्क करें!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Message */}
        <div className="mt-6 md:mt-10 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 border-2 rounded-xl shadow-lg md:rounded-3xl">
            <CardContent className="p-4 text-center md:p-8">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 md:w-12 md:h-12 md:mb-6">
                <Users className="text-white" size={20} />
              </div>
              <h3 className="font-bold text-base text-gray-800 font-mukta mb-2 md:text-lg">
                सहायता के लिए संपर्क करें
              </h3>
              <p className="text-gray-600 text-xs font-noto leading-relaxed md:text-base">
                आंगनवाड़ी कार्यकर्ता, ASHA दीदी या नजदीकी स्वास्थ्य केंद्र से सहायता लें। आप अकेली नहीं हैं!
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
               
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Motivational Quote */}
        <div className="mt-6 md:mt-10 text-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center opacity-30">
                <Heart className="text-white" size={16} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center">
                <Baby className="text-white" size={24} />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center opacity-30">
                <Heart className="text-white" size={16} />
              </div>
            </div>
          </div>
          
          {/* Quote Text */}
          <div className="relative pt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-blue-100/50 rounded-full blur-2xl"></div>
            <div className="relative">
              <p className="text-[#9E79B9] text-base font-bold font-mukta leading-relaxed px-4 md:text-xl lg:text-2xl">
                "पहले 42 दिन सबसे महत्वपूर्ण हैं,<br />
                <span className="bg-gradient-to-r from-[#9E79B9] to-[#B899D1] bg-clip-text text-transparent">
                  सही देखभाल से माँ और बच्चा<br />
                  दोनों रहेंगे स्वस्थ और खुश。
                </span>"
              </p>
              
              {/* Floating Emojis */}
              <div className="absolute -top-2 -left-4 text-xl animate-bounce delay-300">👶</div>
              <div className="absolute -top-4 -right-2 text-lg animate-bounce delay-500">💕</div>
              <div className="absolute -bottom-2 left-8 text-base animate-bounce delay-700">🤱</div>
              <div className="absolute -bottom-4 right-12 text-lg animate-bounce delay-1000">✨</div>
            </div>
          </div>
        </div>
      </div>

      <Downbar />
    </div>
  );
}
