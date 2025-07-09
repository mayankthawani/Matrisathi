"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Apple, Sparkles, Heart, Baby, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";

export default function NutritionPage() {
  const router = useRouter();

  const nutritionStages = [
    {
      id: 1,
      title: "पहली तिमाही (0-3 महीने)",
      emoji: "🌱",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      foods: [
        { text: "फल, हरी सब्जियाँ, साबुत अनाज और दालें खाएं", emoji: "🥗" },
        { text: "फोलिक एसिड युक्त आहार ज़रूरी (चना, पालक, संतरा)", emoji: "🍊" },
        { text: "अधिक पानी पिएं और जंक फूड से बचें", emoji: "💧" },
        { text: "सुबह की मिचली से बचने के लिए हल्का भोजन करें", emoji: "🍽️" }
      ]
    },
    {
      id: 2,
      title: "दूसरी तिमाही (4-6 महीने)",
      emoji: "🌸",
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      foods: [
        { text: "आयरन और कैल्शियम से भरपूर भोजन लें (हरी सब्जियाँ, दूध, दही)", emoji: "🥛" },
        { text: "मांसाहारी हैं तो अंडे और मछली ले सकते हैं", emoji: "🐟" },
        { text: "हल्का व्यायाम करें और अधिक पानी पिएं", emoji: "🚶‍♀️" },
        { text: "दोपहर में फल और ड्राई फ्रूट्स शामिल करें", emoji: "🥜" }
      ]
    },
    {
      id: 3,
      title: "तीसरी तिमाही (6-9 महीने)",
      emoji: "🤰",
      gradient: "from-purple-400 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      foods: [
        { text: "ऊर्जा से भरपूर आहार लें (घी, दलिया, केला, खजूर)", emoji: "🍌" },
        { text: "फाइबर से भरपूर भोजन लें, कब्ज से बचने के लिए", emoji: "🌾" },
        { text: "छोटे-छोटे अंतराल में भोजन करें", emoji: "⏰" },
        { text: "प्रोटीन और आयरन की पूर्ति के लिए अंकुरित अनाज लें", emoji: "🌱" }
      ]
    }
  ];

  const importantTips = [
    { text: "बिना डॉक्टर की सलाह के कोई दवा या सप्लिमेंट न लें", emoji: "💊" },
    { text: "ताजे और घर के बने भोजन को प्राथमिकता दें", emoji: "🏠" },
    { text: "धूम्रपान, शराब और कैफीन से परहेज़ करें", emoji: "🚭" },
    { text: "थकावट महसूस हो तो आराम करें और संतुलित आहार लें", emoji: "😴" }
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
              <Apple className="text-white" size={24} />
            </div>
            <Sparkles className="text-[#9E79B9] animate-pulse" size={20} />
          </div>
          
          <h1 className="text-xl font-bold text-[#9E79B9] mb-3 font-mukta leading-tight md:text-3xl lg:text-4xl">
            पोषण सुझाव
          </h1>
          
          <p className="text-gray-600 text-sm font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            गर्भावस्था के हर चरण में सही आहार लें, स्वस्थ माँ और शिशु के लिए
          </p>
        </div>

        {/* Nutrition Stage Cards */}
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          {nutritionStages.map((stage, index) => (
            <Card
              key={stage.id}
              className={`bg-gradient-to-r ${stage.bgGradient} ${stage.borderColor} border-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden md:rounded-3xl`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-4 relative md:p-8">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -translate-y-8 translate-x-8 md:w-24 md:h-24"></div>
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stage.gradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg flex-shrink-0 md:w-14 md:h-14`}>
                    <span className="text-xl md:text-2xl">{stage.emoji}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#9E79B9] bg-white/70 px-2 py-1 rounded-full font-mukta">
                        {stage.id}
                      </span>
                    </div>
                    <h2 className="font-bold text-base text-gray-800 font-mukta group-hover:text-[#9E79B9] transition-colors md:text-xl leading-tight">
                      {stage.title}
                    </h2>
                  </div>
                </div>

                {/* Foods List */}
                <div className="space-y-3">
                  {stage.foods.map((food, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors cursor-pointer group/item"
                    >
                      <span className="text-base flex-shrink-0 group-hover/item:scale-125 transition-transform">
                        {food.emoji}
                      </span>
                      <p className="text-gray-700 font-noto text-xs leading-relaxed md:text-base">
                        {food.text}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Tips */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200 border-2 rounded-xl shadow-lg md:rounded-3xl">
            <CardContent className="p-4 md:p-8">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg md:w-14 md:h-14">
                  <AlertCircle className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-base text-gray-800 font-mukta md:text-xl">
                  महत्वपूर्ण सुझाव
                </h3>
              </div>
              
              <div className="space-y-3">
                {importantTips.map((tip, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors cursor-pointer group/item"
                  >
                    <span className="text-base flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      {tip.emoji}
                    </span>
                    <p className="text-gray-700 font-noto text-xs leading-relaxed md:text-base">
                      {tip.text}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Creative Quote Section - No Box Design */}
        <div className="mt-12 md:mt-20 text-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center opacity-30">
                <Heart className="text-white" size={16} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center">
                <Apple className="text-white" size={24} />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center opacity-30">
                <Baby className="text-white" size={16} />
              </div>
            </div>
          </div>
          
          {/* Quote Text with Gradient Background */}
          <div className="relative pt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-orange-100/50 rounded-full blur-2xl"></div>
            <div className="relative">
              <p className="text-[#9E79B9] text-lg font-bold font-mukta leading-relaxed px-4 md:text-2xl lg:text-3xl">
                "अच्छा पोषण,<br />
                <span className="bg-gradient-to-r from-[#9E79B9] to-[#B899D1] bg-clip-text text-transparent">
                  सुरक्षित गर्भावस्था की<br />
                  सबसे पहली सीढ़ी है。
                </span>"
              </p>
              
              {/* Floating Food Emojis */}
              <div className="absolute -top-2 -left-4 text-2xl animate-bounce delay-300">🍎</div>
              <div className="absolute -top-4 -right-2 text-xl animate-bounce delay-500">🥛</div>
              <div className="absolute -bottom-2 left-8 text-lg animate-bounce delay-700">🥗</div>
              <div className="absolute -bottom-4 right-12 text-xl animate-bounce delay-1000">🍌</div>
            </div>
          </div>
          
          {/* Decorative Line */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-1 w-8 bg-gradient-to-r from-transparent to-[#9E79B9] rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full"></div>
            <div className="h-1 w-8 bg-gradient-to-r from-[#B899D1] to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Fun Nutrition Facts */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200 border-2 rounded-xl shadow-lg md:rounded-3xl">
            <CardContent className="p-4 text-center md:p-8">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3 md:w-12 md:h-12 md:mb-6">
                <span className="text-lg">💡</span>
              </div>
              <h3 className="font-bold text-base text-gray-800 font-mukta mb-2 md:text-lg">
                क्या आप जानती हैं?
              </h3>
              <p className="text-gray-600 text-xs font-noto leading-relaxed md:text-base">
                गर्भावस्था में सही पोषण से बच्चे का दिमाग तेज़ होता है और उसकी रोग प्रतिरोधक क्षमता मजबूत बनती है!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Downbar />
    </div>
  );
}
