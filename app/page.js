"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Baby, HeartPulse, Info, Star, Users, Award, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF4F4] via-[#FFF8F8] to-[#F8F4FF] w-full max-w-sm mx-auto md:max-w-4xl lg:max-w-6xl">
      {/* 🔹 Enhanced Navbar */}
      <Navbar />

      {/* 🔹 Hero Section */}
      <section className="px-6 py-12 text-center relative overflow-hidden md:px-12 lg:px-20 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-3xl mx-4"></div>
        <div className="relative z-10 md:grid md:grid-cols-2 md:gap-12 md:items-center md:text-left lg:gap-20">
          <div className="relative mb-8 md:mb-0 md:order-2">
            {/* Enhanced background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Image container with enhanced styling */}
            <div className="relative mx-auto w-[280px] h-[280px] group md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#9E79B9] to-[#B899D1] rounded-full p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-full p-3">
                  <Image
                    src="/women.jpg"
                    alt="Pregnancy Illustration"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
                  />
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg animate-bounce delay-300 md:w-10 md:h-10"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full shadow-lg animate-bounce delay-700 md:w-8 md:h-8"></div>
              <div className="absolute top-1/4 -right-4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg animate-pulse md:w-6 md:h-6"></div>
            </div>
          </div>
          
          <div className="md:order-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#9E79B9] to-[#B899D1] bg-clip-text text-transparent mb-6 leading-tight font-mukta md:text-4xl lg:text-5xl md:text-left">
              माँ की देखभाल अब<br />हर गाँव में आसान
            </h1>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed font-noto px-2 md:px-0 md:text-xl md:text-left lg:text-2xl">
              हर महीने के अनुसार जाँच, पोषण और सुरक्षित प्रसव की जानकारी अब सरल भाषा में
            </p>
            
            <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:justify-start">
              <Link href="/Care-journey">
                <Button className="bg-gradient-to-r from-[#9E79B9] to-[#B899D1] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-mukta min-h-[60px] w-full active:scale-95 md:w-auto md:px-12 lg:px-16 lg:py-6 lg:text-xl">
                  अभी शुरू करें
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Stats Section */}
      <section className="px-6 py-8 bg-white/50 md:px-12 lg:px-20 md:py-16">
        <div className="w-full">
          <h2 className="text-xl font-bold text-center text-[#9E79B9] mb-6 font-mukta md:text-2xl lg:text-3xl md:mb-12">हमारे आंकड़े</h2>
          <div className="grid grid-cols-3 gap-3 md:gap-8 lg:gap-12 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 rounded-2xl transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-4 text-center md:p-8">
                <div className="text-2xl font-bold text-green-700 font-mukta md:text-4xl lg:text-5xl">1000+</div>
                <div className="text-xs text-green-600 mt-1 font-noto md:text-base lg:text-lg">खुश माताएं</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 rounded-2xl transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-4 text-center md:p-8">
                <div className="text-2xl font-bold text-blue-700 font-mukta md:text-4xl lg:text-5xl">50+</div>
                <div className="text-xs text-blue-600 mt-1 font-noto md:text-base lg:text-lg">गांव</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 rounded-2xl transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-4 text-center md:p-8">
                <div className="text-2xl font-bold text-purple-700 font-mukta md:text-4xl lg:text-5xl">24/7</div>
                <div className="text-xs text-purple-600 mt-1 font-noto md:text-base lg:text-lg">सहायता</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 🔹 About Us Section */}
      <section className="px-6 py-8 md:px-12 lg:px-20 md:py-16">
        <div className="w-full max-w-4xl mx-auto">
          <Card className="rounded-2xl bg-gradient-to-br from-white to-purple-50 border-purple-100 shadow-xl transform hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 md:p-12">
              <div className="flex items-center gap-3 mb-4 md:gap-6 md:mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9E79B9] to-[#B899D1] rounded-full flex items-center justify-center md:w-16 md:h-16">
                  <Award className="text-white" size={24} />
                </div>
                <h2 className="font-bold text-lg text-[#9E79B9] font-mukta md:text-2xl lg:text-3xl">हमारे बारे में</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base font-noto md:text-lg lg:text-xl">
                चेतना चाइल्ड केयर एंड विमेन वेलफेयर सोसायटी ग्रामीण महिलाओं और बच्चों के स्वास्थ्य के लिए कार्यरत एक संगठन है। हमारा मिशन हर माँ को सुरक्षित मातृत्व प्रदान करना है।
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 🔹 Services Section */}
      <section className="px-6 py-8 bg-white/50 md:px-12 lg:px-20 md:py-16">
        <div className="w-full max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-[#9E79B9] mb-6 text-center font-mukta md:text-2xl lg:text-3xl md:mb-12">हमारी सेवाएं</h3>
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:gap-12">
            <Card className="rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200 transform hover:scale-105 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Baby className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-gray-800 font-mukta">मासिक ट्रैकर</p>
                  <p className="text-gray-600 text-sm font-noto">गर्भावस्था की निगरानी और देखभाल</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 border-red-200 transform hover:scale-105 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-pink-400 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <HeartPulse className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-gray-800 font-mukta">प्रसव योजना</p>
                  <p className="text-gray-600 text-sm font-noto">सुरक्षित प्रसव की तैयारी और सहायता</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl bg-gradient-to-r from-green-50 to-teal-50 border-green-200 transform hover:scale-105 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Info className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-gray-800 font-mukta">पोषण सलाह</p>
                  <p className="text-gray-600 text-sm font-noto">स्वस्थ आहार की जानकारी और सुझाव</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 🔹 Testimonial Section */}
      <section className="px-6 py-8 md:px-12 lg:px-20 md:py-16">
        <div className="w-full max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-[#9E79B9] mb-6 text-center font-mukta md:text-2xl lg:text-3xl md:mb-12">माताओं के अनुभव</h3>
          <Card className="rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 shadow-lg">
            <CardContent className="p-6 md:p-12">
              <div className="flex items-center gap-2 mb-4 md:gap-3 md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current md:w-6 md:h-6" size={18} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 text-base leading-relaxed font-noto md:text-lg lg:text-xl md:mb-8">
                "मातृसाथी के कारण मेरी गर्भावस्था बहुत आसान रही। सभी जानकारी समय पर मिली और डॉक्टर की सलाह भी।"
              </p>
              <div className="flex items-center gap-3 md:gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center md:w-16 md:h-16">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-bold text-base text-gray-800 font-mukta md:text-lg lg:text-xl">सुनीता देवी</p>
                  <p className="text-sm text-gray-600 font-noto md:text-base">गांव - रामपुर</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 🔹 Call to Action Section */}
      <section className="px-6 py-12 bg-gradient-to-br from-purple-100/50 to-pink-100/50 md:px-12 lg:px-20 md:py-20">
        <div className="w-full text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-[#9E79B9] mb-4 font-mukta md:text-2xl lg:text-3xl md:mb-8">आज ही शुरू करें</h3>
          <p className="text-gray-700 mb-8 text-base font-noto leading-relaxed md:text-lg lg:text-xl md:mb-12">
            अपनी गर्भावस्था की यात्रा को सुरक्षित और आसान बनाने के लिए आज ही हमसे जुड़ें
          </p>
          <Link href="/Care-journey">
            <Button className="bg-gradient-to-r from-[#9E79B9] to-[#B899D1] text-white px-12 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-mukta min-h-[60px] w-full active:scale-95 md:w-auto md:px-16 lg:px-20 lg:py-6 lg:text-xl">
              अभी शुरू करें
            </Button>
          </Link>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-[#9E79B9] text-white px-6 py-8 md:px-12 lg:px-20 md:py-16">
        <div className="w-full text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4 md:gap-6 md:mb-8">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center md:w-14 md:h-14">
              <Baby className="text-white" size={20} />
            </div>
            <div className="text-lg font-bold font-mukta md:text-2xl lg:text-3xl">मातृसाथी</div>
          </div>
          <p className="text-purple-100 text-sm mb-4 font-noto md:text-base lg:text-lg md:mb-8">
            चेतना चाइल्ड केयर एंड विमेन वेलफेयर सोसायटी
          </p>
          <div className="border-t border-purple-300/30 pt-4 md:pt-8">
            <p className="text-purple-200 text-base font-noto md:text-lg">
              © 2025 मातृसाथी. सभी अधिकार सुरक्षित।
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

