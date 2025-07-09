"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, DollarSign, Heart, Sparkles, ArrowRight, Baby } from "lucide-react";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";

export default function BirthPlanPage() {
  const planOptions = [
    {
      id: "details",
      title: "प्रसव योजना विवरण",
      subtitle: "सुरक्षित प्रसव की पूरी जानकारी",
      description: "प्रसव से पहले, दौरान और बाद की सभी जरूरी बातें जानें",
      icon: FileText,
      emoji: "📋",
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      href: "/birth-plan/details",
      benefits: ["प्रसव की तैयारी", "अस्पताल की जानकारी", "जरूरी दस्तावेज"]
    },
    {
      id: "jsy",
      title: "जननी सुरक्षा योजना",
      subtitle: "सरकारी सहायता और लाभ",
      description: "JSY योजना से मिलने वाली आर्थिक सहायता की पूरी जानकारी",
      icon: DollarSign,
      emoji: "💰",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      href: "/birth-plan/jsy",
      benefits: ["आर्थिक सहायता", "मुफ्त जांच", "दवाइयां"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF4F4] via-[#FFF8F8] to-[#F8F4FF] w-full max-w-sm mx-auto md:max-w-4xl lg:max-w-6xl">
      <Navbar />
      
      <div className="pt-6 pb-32 px-4 md:px-12 lg:px-20 md:pt-12 md:pb-40">
        {/* Enhanced Header - Mobile Optimized */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center md:w-20 md:h-20">
              <Baby className="text-white" size={20} />
            </div>
            <Sparkles className="text-[#9E79B9] animate-pulse" size={18} />
          </div>
          
          <h1 className="text-xl font-bold text-[#9E79B9] mb-3 font-mukta leading-tight md:text-3xl lg:text-4xl">
            प्रसव योजना की<br />जानकारी चुनें
          </h1>
          
          <p className="text-gray-600 text-sm font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            सुरक्षित प्रसव और सरकारी सहायता से जुड़ी जानकारी पाएं
          </p>
        </div>

        {/* Enhanced Interactive Cards - Mobile Optimized */}
        <div className="space-y-6 md:space-y-12 max-w-4xl mx-auto">
          {planOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card
                key={option.id}
                onClick={() => (window.location.href = option.href)}
                className={`bg-gradient-to-r ${option.bgGradient} ${option.borderColor} border-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer group overflow-hidden md:rounded-3xl active:scale-95`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-4 relative md:p-8 lg:p-10">
                  {/* Background decorations - Smaller for mobile */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -translate-y-8 translate-x-8 md:w-32 md:h-32"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full translate-y-6 -translate-x-6 md:w-20 md:h-20"></div>
                  
                  <div className="flex items-start gap-3 mb-4 md:gap-8 md:mb-8">
                    {/* Icon Container - Mobile Optimized */}
                    <div className={`w-14 h-14 bg-gradient-to-r ${option.gradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg md:w-24 md:h-24 lg:w-28 lg:h-28 md:rounded-3xl flex-shrink-0`}>
                      <span className="text-2xl md:text-4xl lg:text-5xl">{option.emoji}</span>
                    </div>
                    
                    {/* Content - Mobile Optimized */}
                    <div className="flex-1 min-w-0">
                      <h2 className="font-bold text-lg text-gray-800 font-mukta mb-1 group-hover:text-[#9E79B9] transition-colors md:text-2xl lg:text-3xl leading-tight">
                        {option.title}
                      </h2>
                      <p className="text-[#9E79B9] text-xs font-semibold font-mukta mb-2 md:text-base lg:text-lg">
                        {option.subtitle}
                      </p>
                      <p className="text-gray-600 text-xs font-noto leading-relaxed md:text-base lg:text-lg">
                        {option.description}
                      </p>
                    </div>

                    {/* Arrow - Mobile Optimized */}
                    <div className="flex-shrink-0">
                      <ArrowRight 
                        className="text-gray-400 group-hover:text-[#9E79B9] group-hover:translate-x-1 transition-all duration-300 md:w-8 md:h-8 lg:w-10 lg:h-10" 
                        size={20} 
                      />
                    </div>
                  </div>

                  {/* Benefits Section - Mobile Optimized */}
                  <div className="bg-white/60 rounded-lg p-3 md:p-6">
                    <h3 className="font-bold text-gray-700 font-mukta mb-2 text-sm md:text-lg">
                      आपको मिलेगा:
                    </h3>
                    <div className="space-y-2 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
                      {option.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-white/70 rounded-lg">
                          <div className={`w-2 h-2 bg-gradient-to-r ${option.gradient} rounded-full flex-shrink-0`}></div>
                          <span className="text-gray-700 text-xs font-noto md:text-base">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Inspirational Quote Section - Mobile Optimized */}
        <div className="mt-8 md:mt-20 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 border-2 rounded-xl shadow-lg md:rounded-3xl">
            <CardContent className="p-4 text-center md:p-12">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 md:w-16 md:h-16 md:mb-8">
                <Heart className="text-white" size={20} />
              </div>
              <h3 className="font-bold text-base text-gray-800 font-mukta mb-3 md:text-xl lg:text-2xl">
                प्रेरणादायक संदेश
              </h3>
              <p className="text-[#9E79B9] text-sm font-semibold font-mukta leading-relaxed md:text-xl lg:text-2xl">
                "सुरक्षित माँ, स्वस्थ शिशु – यही है हर परिवार की असली खुशी।"
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
              
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Message - Mobile Optimized */}
        <div className="mt-6 md:mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 border-2 rounded-xl shadow-lg md:rounded-3xl">
            <CardContent className="p-4 text-center md:p-12">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3 md:w-16 md:h-16 md:mb-8">
                <span className="text-lg">🤝</span>
              </div>
              <h3 className="font-bold text-base text-gray-800 font-mukta mb-2 md:text-xl lg:text-2xl">
                हमारा समर्थन
              </h3>
              <p className="text-gray-600 text-xs font-noto leading-relaxed md:text-base lg:text-lg">
                हम आपके साथ हैं इस खूबसूरत यात्रा में। सही जानकारी और सहायता के साथ आपका प्रसव सुरक्षित और खुशी भरा होगा。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Downbar />
    </div>
  );
}
