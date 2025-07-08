"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";

export default function IECPage() {
  const router = useRouter();

  const pregnancyStages = [
    {
      id: 1,
      title: "0-3 महीने (पहली तिमाही)",
      subtitle: "प्रारंभिक देखभाल और पोषण",
      description: "गर्भावस्था की शुरुआत में जरूरी जांच और सावधानियां",
      icon: "🌱",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      route: "/iec/1",
    },
    {
      id: 2,
      title: "4-6 महीने (दूसरी तिमाही)",
      subtitle: "मध्यम अवधि की देखभाल",
      description: "स्थिर अवधि में पोषण और नियमित जांच की जानकारी",
      icon: "🌸",
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      route: "/iec/2",
    },
    {
      id: 3,
      title: "6-9 महीने (तीसरी तिमाही)",
      subtitle: "प्रसव की तैयारी",
      description: "अंतिम महीनों की सावधानियां और प्रसव की पूर्ण तैयारी",
      icon: "🤰",
      gradient: "from-purple-400 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      route: "/iec/3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF4F4] via-[#FFF8F8] to-[#F8F4FF] w-full max-w-sm mx-auto md:max-w-4xl lg:max-w-6xl">
      <Navbar />

      <div className="pt-8 pb-32 px-6 md:px-12 lg:px-20 md:pt-12 md:pb-40">
        {/* Enhanced Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center md:w-16 md:h-16">
              <Calendar className="text-white" size={24} />
            </div>
            <Sparkles className="text-[#9E79B9] animate-pulse" size={20} />
          </div>

          <h1 className="text-2xl font-bold text-[#9E79B9] mb-3 font-mukta leading-tight md:text-3xl lg:text-4xl md:mb-6">
            गर्भावस्था के हर चरण की
            <br />
            देखभाल
          </h1>

          <p className="text-gray-600 text-base font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            जानिए हर तिमाही में क्या ज़रूरी है - जांच, पोषण, सावधानियाँ और सलाह
          </p>
        </div>

        {/* Enhanced Cards */}
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          {pregnancyStages.map((stage, index) => (
            <Card
              key={stage.id}
              onClick={() => router.push(stage.route)}
              className={`bg-gradient-to-r ${stage.bgGradient} ${stage.borderColor} border-2 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group overflow-hidden md:rounded-3xl`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 relative md:p-8 lg:p-10">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -translate-y-12 translate-x-12 md:w-32 md:h-32"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8 md:w-20 md:h-20"></div>

                <div className="flex items-center gap-4 md:gap-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stage.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg md:w-20 md:h-20 lg:w-24 lg:h-24 md:rounded-3xl`}
                  >
                    <span className="text-2xl md:text-3xl lg:text-4xl">
                      {stage.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="font-bold text-lg text-gray-800 font-mukta mb-1 group-hover:text-[#9E79B9] transition-colors md:text-xl lg:text-2xl md:mb-2">
                      {stage.title}
                    </h2>
                    <p className="text-[#9E79B9] text-sm font-semibold font-mukta mb-2 md:text-base lg:text-lg">
                      {stage.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm font-noto leading-relaxed md:text-base lg:text-lg">
                      {stage.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="ml-2 md:ml-4">
                    <ArrowRight
                      className="text-gray-400 group-hover:text-[#9E79B9] group-hover:translate-x-2 transition-all duration-300 md:w-7 md:h-7 lg:w-8 lg:h-8"
                      size={24}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tips Section */}
        <div className="mt-12 md:mt-20 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 border-2 rounded-2xl shadow-lg md:rounded-3xl">
            <CardContent className="p-6 text-center md:p-12">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 md:w-16 md:h-16 md:mb-8">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-lg text-gray-800 font-mukta mb-2 md:text-xl lg:text-2xl md:mb-4">
                महत्वपूर्ण सुझाव
              </h3>
              <p className="text-gray-600 text-sm font-noto leading-relaxed md:text-base lg:text-lg">
                हर तिमाही में नियमित डॉक्टर की जांच कराएं और दिए गए सुझावों का पालन करें। आपका और बच्चे का स्वास्थ्य सबसे महत्वपूर्ण है。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Downbar />
    </div>
  );
}
             