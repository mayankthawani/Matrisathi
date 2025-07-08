"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Sparkles, CheckCircle, XCircle, Baby, AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";

export default function IECSecondTrimester() {
  const router = useRouter();

  const learningCards = [
    {
      id: "care-points",
      title: "क्या करें?",
      emoji: "✨",
      icon: CheckCircle,
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      sections: [
        {
          title: "स्वस्थ आहार",
          emoji: "🥗",
          items: [
            { text: "फल, सब्जियाँ, साबुत अनाज", emoji: "🥕" },
            { text: "दूध, दही, पनीर (कैल्शियम)", emoji: "🥛" },
            { text: "हरी पत्तेदार सब्जियाँ (आयरन)", emoji: "🥬" }
          ]
        },
        {
          title: "नियमित व्यायाम",
          emoji: "🚶‍♀️",
          items: [
            { text: "डॉक्टर की सलाह से चलना, योग", emoji: "🧘‍♀️" },
            { text: "पर्याप्त आराम और नींद", emoji: "😴" }
          ]
        },
        {
          title: "डॉक्टर से मिलना",
          emoji: "👩‍⚕️",
          items: [
            { text: "नियमित जांच कराएं", emoji: "🩺" },
            { text: "समय पर ANC विज़िट करें", emoji: "📅" }
          ]
        }
      ]
    },
    {
      id: "changes",
      title: "शारीरिक बदलाव",
      emoji: "🌸",
      icon: Heart,
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      content: [
        { text: "ऊर्जा में वृद्धि", emoji: "⚡" },
        { text: "पेट का बढ़ना", emoji: "🤰" },
        { text: "बच्चे की हलचल महसूस होना", emoji: "👶" },
        { text: "त्वचा में बदलाव", emoji: "✨" },
        { text: "भूख का बढ़ना", emoji: "🍽️" }
      ]
    },
    {
      id: "issues",
      title: "सामान्य समस्याएं",
      emoji: "⚠️",
      icon: AlertTriangle,
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
      content: [
        { text: "पीठ दर्द", emoji: "💢" },
        { text: "पैरों में सूजन", emoji: "🦵" },
        { text: "अपच और गैस", emoji: "🤢" },
        { text: "सिरदर्द", emoji: "🤕" }
      ]
    },
    {
      id: "donts",
      title: "क्या न करें?",
      emoji: "🚫",
      icon: XCircle,
      gradient: "from-red-400 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      borderColor: "border-red-200",
      content: [
        { text: "भारी वजन न उठाएं", emoji: "🏋️‍♀️" },
        { text: "ज्यादा देर तक खड़े न रहें", emoji: "🚶‍♀️" },
        { text: "गर्म पानी से स्नान न करें", emoji: "🛁" },
        { text: "धूम्रपान और शराब से बचें", emoji: "🚭" }
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
              <span className="text-2xl md:text-3xl">🌸</span>
            </div>
            <Sparkles className="text-[#9E79B9] animate-pulse" size={24} />
          </div>
          
          <h1 className="text-2xl font-bold text-[#9E79B9] mb-4 font-mukta leading-tight md:text-3xl lg:text-4xl">
            गर्भावस्था की द्वितीय तिमाही<br />
            <span className="text-lg md:text-xl lg:text-2xl text-gray-600">एक सुंदर यात्रा</span>
          </h1>
          
          <p className="text-gray-600 text-base font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            जानें इस अद्भुत चरण में क्या करें, क्या न करें और किन बातों का रखें ध्यान
          </p>
        </div>

        {/* Interactive Learning Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
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

                  {/* Content with sections for complex cards */}
                  {card.sections ? (
                    <div className="space-y-6">
                      {card.sections.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="bg-white/50 rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-xl">{section.emoji}</span>
                            <h4 className="font-bold text-lg text-gray-700 font-mukta">
                              {section.title}
                            </h4>
                          </div>
                          <div className="space-y-3">
                            {section.items.map((item, itemIdx) => (
                              <div 
                                key={itemIdx} 
                                className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/80 transition-colors cursor-pointer group/item"
                              >
                                <span className="text-lg flex-shrink-0 group-hover:item:scale-125 transition-transform">
                                  {item.emoji}
                                </span>
                                <p className="text-gray-700 font-noto text-sm leading-relaxed md:text-base">
                                  {item.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Simple content for other cards */
                    <div className="space-y-4">
                      {card.content.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-colors cursor-pointer group/item"
                        >
                          <span className="text-xl flex-shrink-0 group-hover:item:scale-125 transition-transform">
                            {item.emoji}
                          </span>
                          <p className="text-gray-700 font-noto text-sm leading-relaxed md:text-base">
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

        {/* Additional Tips Section */}
        <div className="mt-12 md:mt-20 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 border-2 rounded-2xl shadow-lg md:rounded-3xl">
            <CardContent className="p-6 md:p-12">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 md:w-16 md:h-16">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 font-mukta mb-3 md:text-xl lg:text-2xl">
                    अतिरिक्त सुझाव
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl">
                      <span className="text-lg">✈️</span>
                      <p className="text-gray-700 font-noto text-sm md:text-base">
                        लंबी यात्रा करने से पहले डॉक्टर से पूछें
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl">
                      <span className="text-lg">💊</span>
                      <p className="text-gray-700 font-noto text-sm md:text-base">
                        कोई भी दवा लेने से पहले सलाह लें
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl">
                      <span className="text-lg">🧼</span>
                      <p className="text-gray-700 font-noto text-sm md:text-base">
                        साफ-सफाई और हाइजीन का विशेष ध्यान रखें
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 border-2 rounded-2xl shadow-lg md:rounded-3xl">
            <CardContent className="p-6 md:p-12">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 md:w-16 md:h-16">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 font-mukta mb-3 md:text-xl lg:text-2xl">
                    याद रखें
                  </h3>
                  <div className="bg-white/70 p-4 rounded-xl border-l-4 border-orange-400">
                    <p className="text-sm text-gray-600 font-noto md:text-base">
                      <strong className="text-[#9E79B9]">नोट:</strong> हर महिला की गर्भावस्था अलग होती है, इसलिए अपने शरीर को समझें और समय पर डॉक्टर से सलाह लें。
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fun Facts Section */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 border-2 rounded-2xl shadow-lg md:rounded-3xl">
            <CardContent className="p-6 text-center md:p-12">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 md:w-16 md:h-16 md:mb-8">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 font-mukta mb-3 md:text-xl lg:text-2xl">
                क्या आप जानती हैं?
              </h3>
              <p className="text-gray-600 text-sm font-noto leading-relaxed md:text-base lg:text-lg">
                दूसरी तिमाही को 'गोल्डन पीरियड' कहते हैं क्योंकि इस समय आप सबसे अच्छा महसूस करती हैं और बच्चे की हलचल भी शुरू हो जाती है!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Downbar />
    </div>
  );
}
