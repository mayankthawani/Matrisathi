"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Sparkles, CheckCircle, XCircle, Baby, AlertTriangle, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";

export default function IEC3Page() {
  const router = useRouter();

  const learningCards = [
    {
      id: "important",
      title: "महत्वपूर्ण बातें",
      emoji: "🌟",
      icon: Heart,
      gradient: "from-purple-400 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      content: [
        { text: "बच्चा तेजी से बढ़ता है", emoji: "👶" },
        { text: "शरीर में बदलाव और थकान सामान्य है", emoji: "😴" },
        { text: "भावनात्मक परिवर्तन होते हैं", emoji: "😊😢" }
      ]
    },
    {
      id: "health-care",
      title: "स्वास्थ्य देखभाल",
      emoji: "🏥",
      icon: CheckCircle,
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      content: [
        { text: "नियमित डॉक्टर की जांच करवाएं", emoji: "👩‍⚕️" },
        { text: "थकान होने पर तुरंत आराम करें", emoji: "🛌" },
        { text: "संतुलित आहार लें", emoji: "🥗" },
        { text: "पर्याप्त पानी पिएं", emoji: "💧" },
        { text: "साफ-सफाई रखें", emoji: "🧼" },
        { text: "लंबी यात्राओं से बचें", emoji: "✈️" }
      ]
    },
    {
      id: "body-changes",
      title: "शारीरिक बदलाव",
      emoji: "🤰",
      icon: Baby,
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      content: [
        { text: "सांस लेने में दिक्कत - आरामदायक स्थिति में रहें", emoji: "😮‍💨" },
        { text: "पीठ दर्द - हल्की सिकाई और आराम", emoji: "🔙" },
        { text: "पैरों में सूजन - पैर ऊँचा रखें", emoji: "🦵" },
        { text: "बार-बार पेशाब आना सामान्य है", emoji: "🚽" },
        { text: "अपच - हल्का और बार-बार भोजन", emoji: "🍽️" }
      ]
    },
    {
      id: "emotional",
      title: "भावनात्मक स्वास्थ्य",
      emoji: "💝",
      icon: Heart,
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
      content: [
        { text: "तनाव - ध्यान, योग या संगीत से राहत", emoji: "🧘‍♀️" },
        { text: "डर - अनुभवी व्यक्ति से बात करें", emoji: "🗣️" },
        { text: "परिवार का सहयोग लें", emoji: "👪" }
      ]
    },
    {
      id: "delivery-prep",
      title: "प्रसव की तैयारी",
      emoji: "🎯",
      icon: CheckCircle,
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      content: [
        { text: "प्रसव कक्षाएं ज्वाइन करें", emoji: "👩‍🏫" },
        { text: "अस्पताल का चुनाव करें", emoji: "🏥" },
        { text: "जरूरी चीजें तैयार रखें", emoji: "🎒" },
        { text: "बच्चे के कपड़े और सामान खरीदें", emoji: "👕" }
      ]
    },
    {
      id: "precautions",
      title: "बचाव और सलाह",
      emoji: "🚫",
      icon: Shield,
      gradient: "from-red-400 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      borderColor: "border-red-200",
      content: [
        { text: "धूम्रपान और शराब से दूर रहें", emoji: "🚭" },
        { text: "कैफीन का सेवन कम करें", emoji: "☕" },
        { text: "डॉक्टर की सलाह लें", emoji: "👩‍⚕️" },
        { text: "समस्या हो तो तुरंत संपर्क करें", emoji: "📞" }
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
              <span className="text-2xl md:text-3xl">🤰</span>
            </div>
            <Sparkles className="text-[#9E79B9] animate-pulse" size={24} />
          </div>
          
          <h1 className="text-2xl font-bold text-[#9E79B9] mb-4 font-mukta leading-tight md:text-3xl lg:text-4xl">
            गर्भावस्था की तृतीय तिमाही<br />
            <span className="text-lg md:text-xl lg:text-2xl text-gray-600">(6-9 महीने)</span>
          </h1>
          
          <p className="text-gray-600 text-base font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            अंतिम चरण में प्रसव की तैयारी और विशेष देखभाल की जानकारी
          </p>
        </div>

        {/* Interactive Learning Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 max-w-6xl mx-auto">
          {learningCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card
                key={card.id}
                className={`bg-gradient-to-r ${card.bgGradient} ${card.borderColor} border-2 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden md:rounded-3xl`}
                style={{ animationDelay: `${index * 150}ms` }}
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

        {/* Emergency Contact Section */}
        <div className="mt-12 md:mt-20 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 border-2 rounded-2xl shadow-lg md:rounded-3xl">
            <CardContent className="p-6 md:p-12">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 md:w-16 md:h-16">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 font-mukta mb-3 md:text-xl lg:text-2xl">
                    आपातकालीन संपर्क
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl">
                      <span className="text-lg">🚨</span>
                      <p className="text-gray-700 font-noto text-sm md:text-base">
                        तेज दर्द, खून आना या अचानक पानी निकलना
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl">
                      <span className="text-lg">📞</span>
                      <p className="text-gray-700 font-noto text-sm md:text-base">
                        तुरंत डॉक्टर या अस्पताल से संपर्क करें
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Checklist */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 border-2 rounded-2xl shadow-lg md:rounded-3xl">
            <CardContent className="p-6 md:p-12">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 md:w-16 md:h-16">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 font-mukta md:text-xl lg:text-2xl">
                  प्रसव के लिए तैयार बैग
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { text: "माँ के कपड़े", emoji: "👗" },
                  { text: "बच्चे के कपड़े", emoji: "👕" },
                  { text: "जरूरी दस्तावेज", emoji: "📄" },
                  { text: "दवाइयां", emoji: "💊" },
                  { text: "टॉवल और साबुन", emoji: "🧼" },
                  { text: "पैसे", emoji: "💰" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/70 rounded-xl">
                    <span className="text-lg">{item.emoji}</span>
                    <p className="text-gray-700 font-noto text-sm md:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fun Facts Section */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 border-2 rounded-2xl shadow-lg md:rounded-3xl">
            <CardContent className="p-6 text-center md:p-12">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 md:w-16 md:h-16 md:mb-8">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 font-mukta mb-3 md:text-xl lg:text-2xl">
                खुशखबरी!
              </h3>
              <p className="text-gray-600 text-sm font-noto leading-relaxed md:text-base lg:text-lg">
                तीसरी तिमाही में बच्चा पूरी तरह से विकसित हो जाता है और जल्द ही आप अपने प्यारे बच्चे से मिलने वाली हैं!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Downbar />
    </div>
  );
}
