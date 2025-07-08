"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Sparkles, CheckCircle, XCircle, Apple, AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";

export default function IECOnePage() {
  const router = useRouter();

  const learningCards = [
    { 
      id: "changes",
      title: "शारीरिक बदलाव",
      emoji: "🌱",
      icon: Heart,
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      content: [
        { text: "सुबह की बीमारी (उल्टी, मतली)", emoji: "🤢" },
        { text: "छाती में दर्द और कोमलता", emoji: "💗" },
        { text: "बार-बार पेशाब आना", emoji: "🚽" },
        { text: "थकान महसूस होना", emoji: "😴" },
        { text: "मूड स्विंग / चिड़चिड़ापन", emoji: "😊😢" }
      ]
    },
    {
      id: "do",
      title: "क्या करें?",
      emoji: "✅",
      icon: CheckCircle,
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      content: [
        { text: "फल, सब्जियाँ, साबुत अनाज और प्रोटीन लें", emoji: "🥗" },
        { text: "पर्याप्त पानी पिएं और आराम करें", emoji: "💧" },
        { text: "हल्का व्यायाम करें (वॉक, योग)", emoji: "🚶‍♀️" },
        { text: "तनाव कम करने के लिए ध्यान करें", emoji: "🧘‍♀️" },
        { text: "डॉक्टर से नियमित रूप से मिलें", emoji: "👩‍⚕️" }
      ]
    },
    {
      id: "dont",
      title: "क्या न करें?",
      emoji: "🚫",
      icon: XCircle,
      gradient: "from-red-400 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      borderColor: "border-red-200",
      content: [
        { text: "कैफीन, शराब और धूम्रपान से दूर रहें", emoji: "🚭" },
        { text: "कच्चा मांस/अंडा न खाएं", emoji: "🥩" },
        { text: "भारी सामान न उठाएं", emoji: "🏋️‍♀️" },
        { text: "बिना डॉक्टर की सलाह के दवा न लें", emoji: "💊" }
      ]
    },
    {
      id: "food-good",
      title: "अच्छा खाना",
      emoji: "🍎",
      icon: Apple,
      gradient: "from-orange-400 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50",
      borderColor: "border-orange-200",
      content: [
        { text: "फल और सब्जियाँ (विटामिन)", emoji: "🍓🥕" },
        { text: "साबुत अनाज (फाइबर)", emoji: "🌾" },
        { text: "दूध और डेयरी (कैल्शियम)", emoji: "🥛" },
        { text: "मांस और मछली (प्रोटीन)", emoji: "🐟" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF4F4] via-[#FFF8F8] to-[#F8F4FF] w-full max-w-sm mx-auto md:max-w-4xl lg:max-w-6xl">
      <Navbar />

      <div className="pt-8 pb-32 px-6 md:px-12 lg:px-20 md:pt-12 md:pb-40">
        {/* Back Button */}
        <button
          className="flex items-center text-base text-[#9E79B9] mb-6 font-mukta font-semibold hover:scale-105 transition-transform md:text-lg"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-5 h-5 mr-2 md:w-6 md:h-6" />
          वापस जाएं
        </button>

        {/* Enhanced Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center md:w-20 md:h-20">
              <span className="text-2xl md:text-3xl">🌱</span>
            </div>
            <Sparkles className="text-[#9E79B9] animate-pulse" size={24} />
          </div>
          
          <h1 className="text-2xl font-bold text-[#9E79B9] mb-4 font-mukta leading-tight md:text-3xl lg:text-4xl">
            गर्भावस्था की प्रथम तिमाही<br />
            <span className="text-lg md:text-xl lg:text-2xl text-gray-600">एक खास यात्रा</span>
          </h1>
          
          <p className="text-gray-600 text-base font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            जानें पहले तीन महीनों में किन बातों का रखें ध्यान — स्वास्थ्य, पोषण और सावधानियाँ
          </p>
        </div>

        {/* Interactive Learning Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 max-w-5xl mx-auto">
          {learningCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card
                key={card.id}
                className={`bg-gradient-to-r ${card.bgGradient} ${card.borderColor} border-2 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden md:rounded-3xl`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 relative md:p-8">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className={`w-14 h-14 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg md:w-16 md:h-16`}>
                      <span className="text-2xl md:text-3xl">{card.emoji}</span>
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 font-mukta group-hover:text-[#9E79B9] transition-colors md:text-2xl">
                      {card.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {card.content.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-colors cursor-pointer group/item"
                      >
                        <span className="text-xl flex-shrink-0 group-hover/item:scale-125 transition-transform">
                          {item.emoji}
                        </span>
                        <p className="text-gray-700 font-noto text-sm leading-relaxed md:text-base">
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

        {/* Important Notice */}
        <div className="mt-12 md:mt-20 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 border-2 rounded-2xl shadow-lg md:rounded-3xl">
            <CardContent className="p-6 md:p-12">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 md:w-16 md:h-16">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 font-mukta mb-3 md:text-xl lg:text-2xl">
                    महत्वपूर्ण सावधानी
                  </h3>
                  <p className="text-gray-700 font-noto leading-relaxed mb-4 md:text-lg">
                    गर्भावस्था की प्रथम तिमाही में शरीर का विशेष ध्यान रखें। डॉक्टर की सलाह का पालन करें और चिंता होने पर उनसे तुरंत संपर्क करें。
                  </p>
                  <div className="bg-white/70 p-4 rounded-xl border-l-4 border-orange-400">
                    <p className="text-sm text-gray-600 font-noto md:text-base">
                      <strong className="text-[#9E79B9]">अस्वीकरण:</strong> यह जानकारी केवल शिक्षण हेतु है। किसी भी समस्या में डॉक्टर से संपर्क करें。
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fun Facts Section */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 border-2 rounded-2xl shadow-lg md:rounded-3xl">
            <CardContent className="p-6 text-center md:p-12">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 md:w-16 md:h-16 md:mb-8">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 font-mukta mb-3 md:text-xl lg:text-2xl">
                क्या आप जानती हैं?
              </h3>
              <p className="text-gray-600 text-sm font-noto leading-relaxed md:text-base lg:text-lg">
                पहली तिमाही में बच्चे का दिल धड़कना शुरू हो जाता है और सभी मुख्य अंग बनने लगते हैं। यह समय बहुत महत्वपूर्ण है!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Downbar />
    </div>
  );
}
