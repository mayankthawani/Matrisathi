"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, DollarSign, Heart, Sparkles, CheckCircle, FileText, Users, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";

export default function JSYPage() {
  const router = useRouter();

  const jsyCards = [
    {
      id: "purpose",
      title: "योजना का उद्देश्य",
      emoji: "🌟",
      icon: Heart,
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      content: "महिलाओं को संस्थागत प्रसव के लिए प्रोत्साहित करना जिससे मातृ और शिशु मृत्यु दर को घटाया जा सके।"
    },
    {
      id: "benefits",
      title: "लाभ",
      emoji: "💰",
      icon: DollarSign,
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      items: [
        { text: "ग्रामीण क्षेत्रों में ₹1400 तक", emoji: "🏘️" },
        { text: "शहरी क्षेत्रों में ₹1000 तक", emoji: "🏙️" },
        { text: "ASHA कार्यकर्ता को प्रोत्साहन राशि", emoji: "👩‍⚕️" },
        { text: "फ्री दवाइयाँ, जांच, भोजन और रहना", emoji: "🏥" }
      ]
    },
    {
      id: "eligibility",
      title: "पात्रता",
      emoji: "👩‍🍼",
      icon: CheckCircle,
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      items: [
        { text: "BPL कार्डधारक महिलाएँ", emoji: "📋" },
        { text: "उम्र 19 वर्ष से अधिक", emoji: "🎂" },
        { text: "पहली या दूसरी डिलीवरी", emoji: "👶" },
        { text: "सरकारी संस्थान में प्रसव", emoji: "🏥" }
      ]
    },
    {
      id: "application",
      title: "आवेदन प्रक्रिया",
      emoji: "📝",
      icon: FileText,
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      items: [
        { text: "नजदीकी सरकारी अस्पताल / PHC / CHC में संपर्क करें", emoji: "🏥" },
        { text: "ASHA या आंगनवाड़ी कार्यकर्ता की मदद लें", emoji: "👩‍⚕️" },
        { text: "दस्तावेज़: आधार, BPL कार्ड, प्रसव पंजी, बैंक पासबुक", emoji: "📄" }
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
              <span className="text-2xl md:text-3xl">💰</span>
            </div>
            <Sparkles className="text-[#9E79B9] animate-pulse" size={20} />
          </div>
          
          <h1 className="text-xl font-bold text-[#9E79B9] mb-3 font-mukta leading-tight md:text-3xl lg:text-4xl">
            जननी सुरक्षा योजना<br />
            <span className="text-base md:text-xl lg:text-2xl text-gray-600">(JSY) लाभ</span>
          </h1>
          
          <p className="text-gray-600 text-sm font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            गर्भवती महिलाओं को सरकारी सहायता और सुरक्षित प्रसव हेतु जानकारी
          </p>
        </div>

        {/* Interactive Cards */}
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          {jsyCards.map((card, index) => {
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
                    <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg md:w-14 md:h-14`}>
                      <span className="text-xl md:text-2xl">{card.emoji}</span>
                    </div>
                    <h2 className="font-bold text-base text-gray-800 font-mukta group-hover:text-[#9E79B9] transition-colors md:text-xl">
                      {card.title}
                    </h2>
                  </div>

                  {/* Content */}
                  {card.content ? (
                    <div className="bg-white/50 rounded-lg p-3 md:p-4">
                      <p className="text-gray-700 text-xs font-noto leading-relaxed md:text-base">
                        {card.content}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {card.items?.map((item, idx) => (
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
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Important Notice */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 border-2 rounded-xl shadow-lg md:rounded-3xl">
            <CardContent className="p-4 md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 md:w-12 md:h-12">
                  <AlertCircle className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-800 font-mukta mb-2 md:text-lg">
                    महत्वपूर्ण जानकारी
                  </h3>
                  <p className="text-gray-700 font-noto text-xs leading-relaxed md:text-base">
                    अधिक जानकारी के लिए अपने नजदीकी स्वास्थ्य केंद्र या ASHA कार्यकर्ता से संपर्क करें। सभी दस्तावेज़ सही होना जरूरी है。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-6 md:mt-10 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 border-2 rounded-xl shadow-lg md:rounded-3xl">
            <CardContent className="p-4 text-center md:p-12">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3 md:w-16 md:h-16 md:mb-8">
                <Heart className="text-white" size={20} />
              </div>
              <h3 className="font-bold text-base text-gray-800 font-mukta mb-3 md:text-xl">
                प्रेरणादायक संदेश
              </h3>
              <p className="text-[#9E79B9] text-sm font-semibold font-mukta leading-relaxed md:text-lg">
                "हर माँ को मिले सुरक्षा और सम्मान – जननी सुरक्षा योजना के साथ।"
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <div className="mt-6 md:mt-10 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 border-2 rounded-xl shadow-lg md:rounded-3xl">
            <CardContent className="p-4 text-center md:p-8">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 md:w-12 md:h-12 md:mb-6">
                <Users className="text-white" size={20} />
              </div>
              <h3 className="font-bold text-base text-gray-800 font-mukta mb-2 md:text-lg">
                सहायता चाहिए?
              </h3>
              <p className="text-gray-600 text-xs font-noto leading-relaxed md:text-base">
                हमारे ASHA कार्यकर्ता या स्वास्थ्य केंद्र से संपर्क करें। वे आपकी पूरी मदद करेंगे。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Downbar />
    </div>
  );
}
