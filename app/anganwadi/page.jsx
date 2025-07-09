"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, MapPin, User, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Downbar from "@/components/Downbar";
import anganwadiData from "@/components/data/anganwadi.json";

export default function AnganwadiList() {
  const router = useRouter();

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
              <Phone className="text-white" size={24} />
            </div>
            <Sparkles className="text-[#9E79B9] animate-pulse" size={20} />
          </div>
          
          <h1 className="text-xl font-bold text-[#9E79B9] mb-3 font-mukta leading-tight md:text-3xl lg:text-4xl">
            आंगनवाड़ी कार्यकर्ता<br />संपर्क सूची
          </h1>
          
          <p className="text-gray-600 text-sm font-noto leading-relaxed px-2 md:text-lg lg:text-xl md:px-0 max-w-3xl mx-auto">
            आपके नजदीकी आंगनवाड़ी कार्यकर्ताओं की संपर्क जानकारी
          </p>
        </div>

        {/* Anganwadi Cards */}
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          {anganwadiData.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden md:rounded-3xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 relative md:p-8">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -translate-y-8 translate-x-8 md:w-24 md:h-24"></div>
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg flex-shrink-0 md:w-14 md:h-14">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base text-gray-800 font-mukta group-hover:text-[#9E79B9] transition-colors md:text-xl leading-tight">
                      {item.panchayat}
                    </h3>
                    <p className="text-xs text-gray-600 font-noto md:text-sm">
                      पंचायत क्षेत्र
                    </p>
                  </div>
                </div>

                {/* Centers List */}
                <div className="space-y-3">
                  {item.centers.map((center, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors group/item"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <User className="text-white" size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#9E79B9] bg-white/70 px-2 py-1 rounded-full font-mukta">
                              पारा
                            </span>
                            <span className="text-gray-700 font-noto text-xs md:text-sm font-medium">
                              {center.para}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-green-600 bg-white/70 px-2 py-1 rounded-full font-mukta">
                              कार्यकर्ता
                            </span>
                            <span className="text-gray-700 font-noto text-xs md:text-sm font-medium">
                              {center.worker}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        

        {/* Important Notice */}
        <div className="mt-6 md:mt-10 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 border-2 rounded-xl shadow-lg md:rounded-3xl">
            <CardContent className="p-4 text-center md:p-8">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 md:w-12 md:h-12 md:mb-6">
                <span className="text-lg">💡</span>
              </div>
              <h3 className="font-bold text-base text-gray-800 font-mukta mb-2 md:text-lg">
                क्या आप जानती हैं?
              </h3>
              <p className="text-gray-600 text-xs font-noto leading-relaxed md:text-base">
                आंगनवाड़ी कार्यकर्ता गर्भावस्था से लेकर बच्चे के 6 साल तक की उम्र तक मुफ्त सेवाएं प्रदान करती हैं。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Downbar />
    </div>
  );
}
