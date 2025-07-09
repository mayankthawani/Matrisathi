"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Hospital, ShoppingBag, AlertTriangle, Baby, DollarSign, Heart, CheckCircle, Sparkles, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";

export default function BirthPlanDetailsPage() {
  const router = useRouter();

  const birthPlanSteps = [
    {
      id: 1,
      title: "स्वास्थ्य केंद्र और डॉक्टर का चयन",
      emoji: "🏥",
      icon: Hospital,
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      items: [
        { text: "नजदीकी PHC, CHC या अस्पताल की पहचान करें", emoji: "📍" },
        { text: "जटिल प्रसव के लिए सक्षम डॉक्टर/नर्स की सेवाएं तय करें", emoji: "👩‍⚕️" },
        { text: "आपातकालीन स्थिति के लिए बैकअप अस्पताल तय करें", emoji: "🚨" }
      ]
    },
    {
      id: 2,
      title: "प्रसव की तैयारियां",
      emoji: "🎒",
      icon: ShoppingBag,
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      items: [
        { text: "अस्पताल बैग: माँ-बच्चे के कपड़े, पैड्स, रिपोर्ट्स और दवाइयाँ", emoji: "👗" },
        { text: "सहयोगी का चयन: प्रसव के समय मदद के लिए किसी परिवारजन को तय करें", emoji: "👥" }
      ]
    },
    {
      id: 3,
      title: "संभावित जटिलताओं पर ध्यान",
      emoji: "⚠️",
      icon: AlertTriangle,
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      items: [
        { text: "हाई ब्लड प्रेशर, एनीमिया आदि की जानकारी डॉक्टर को दें", emoji: "🩺" },
        { text: "संभावित जटिल स्थिति में आपात योजना तैयार रखें", emoji: "📋" }
      ]
    },
    {
      id: 4,
      title: "डिलीवरी का तरीका",
      emoji: "🤱",
      icon: Baby,
      gradient: "from-pink-400 to-purple-500",
      bgGradient: "from-pink-50 to-purple-50",
      borderColor: "border-pink-200",
      content: "सामान्य डिलीवरी या सी-सेक्शन के लिए डॉक्टर की सलाह पर निर्णय लें।"
    },
    {
      id: 5,
      title: "प्रसव के लक्षण",
      emoji: "🚨",
      icon: Heart,
      gradient: "from-red-400 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      borderColor: "border-red-200",
      items: [
        { text: "नियमित पेट में दर्द (संकुचन)", emoji: "😣" },
        { text: "पानी का फटना", emoji: "💧" },
        { text: "रक्तस्राव या असामान्य डिस्चार्ज", emoji: "🩸" }
      ]
    },
    {
      id: 6,
      title: "वित्तीय योजना",
      emoji: "💰",
      icon: DollarSign,
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
      items: [
        { text: "अस्पताल खर्चों के लिए बजट बनाएं", emoji: "💵" },
        { text: "JSY या अन्य योजनाओं का लाभ लें", emoji: "📄" }
      ]
    },
    {
      id: 7,
      title: "नवजात देखभाल की तैयारी",
      emoji: "👶",
      icon: Baby,
      gradient: "from-teal-400 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200",
      items: [
        { text: "कपड़े, नैपी, साफ-सफाई का सामान तैयार रखें", emoji: "🧸" },
        { text: "स्तनपान और टीकाकरण की जानकारी रखें", emoji: "💉" }
      ]
    },
    {
      id: 8,
      title: "सरकारी सहायता योजनाएँ",
      emoji: "🏛️",
      icon: FileText,
      gradient: "from-indigo-400 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      items: [
        { text: "JSY: प्रसव हेतु वित्तीय सहायता", emoji: "💸" },
        { text: "JSSK: मुफ्त दवा, जांच, परिवहन सेवा", emoji: "🚐" }
      ]
    },
    {
      id: 9,
      title: "महत्वपूर्ण सुझाव",
      emoji: "💡",
      icon: CheckCircle,
      gradient: "from-emerald-400 to-green-500",
      bgGradient: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      items: [
        { text: "तीनों ANC जांच समय पर करवाएं", emoji: "📅" },
        { text: "डॉक्टर के निर्देशों का पालन करें", emoji: "👩‍⚕️" },
        { text: "समस्या होने पर तुरंत स्वास्थ्य केंद्र जाएं", emoji: "🏃‍♀️" }
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
              <span className="text-2xl md:text-3xl">📋</span>
            </div>
            <Sparkles className="text-[#9E79B9] animate-pulse" size={20} />
          </div>
          
          <h1 className="text-xl font-bold text-[#9E79B9] mb-3 font-mukta leading-tight md:text-3xl lg:text-4xl">
            प्रसव योजना की तैयारी
          </h1>
          
          <p className="text-gray-600 text-sm font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            सुरक्षित और व्यवस्थित प्रसव के लिए आवश्यक कदम
          </p>
        </div>

        {/* Interactive Step Cards */}
        <div className="space-y-5 md:space-y-8 max-w-4xl mx-auto">
          {birthPlanSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card
                key={step.id}
                className={`bg-gradient-to-r ${step.bgGradient} ${step.borderColor} border-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden md:rounded-3xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 relative md:p-8">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -translate-y-8 translate-x-8 md:w-24 md:h-24"></div>
                  
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4 md:mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg flex-shrink-0 md:w-14 md:h-14`}>
                      <span className="text-xl md:text-2xl">{step.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-[#9E79B9] bg-white/70 px-2 py-1 rounded-full font-mukta">
                          {step.id}
                        </span>
                      </div>
                      <h2 className="font-bold text-base text-gray-800 font-mukta group-hover:text-[#9E79B9] transition-colors md:text-xl leading-tight">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  {/* Content */}
                  {step.content ? (
                    <div className="bg-white/50 rounded-lg p-3 md:p-4">
                      <p className="text-gray-700 text-xs font-noto leading-relaxed md:text-base">
                        {step.content}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {step.items?.map((item, idx) => (
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

       

        {/* Emergency Contact */}
        <div className="mt-6 md:mt-10 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 border-2 rounded-xl shadow-lg md:rounded-3xl">
            <CardContent className="p-4 text-center md:p-8">
              <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3 md:w-12 md:h-12 md:mb-6">
                <span className="text-lg">🚨</span>
              </div>
              <h3 className="font-bold text-base text-gray-800 font-mukta mb-2 md:text-lg">
                आपातकालीन संपर्क
              </h3>
              <p className="text-gray-600 text-xs font-noto leading-relaxed md:text-base">
                किसी भी समस्या में तुरंत अपने डॉक्टर या नजदीकी स्वास्थ्य केंद्र से संपर्क करें। आपका और बच्चे का स्वास्थ्य सबसे महत्वपूर्ण है。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Downbar />
    </div>
  );
}
